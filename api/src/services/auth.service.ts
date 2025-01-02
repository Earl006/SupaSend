import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PassportStatic } from 'passport';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
import { AuthResponse, LoginInput, RegisterInput } from '../interfaces/auth';

// Initialize Prisma
const prisma = new PrismaClient();

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';


export class AuthService {
  /**
   * Registers a new user.
   * @param data RegisterInput object containing user details.
   * @returns AuthResponse with user and JWT token.
   */
  static async register(data: RegisterInput): Promise<AuthResponse> {
    const { name, email, phoneNumber, password, location } = data;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error('Email is already in use.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phoneNumber,
        password: hashedPassword,
        location,
        
      },
    });

    const token = this.generateToken(user.id);

    return { user, token };
  }

  /**
   * Logs in a user.
   * @param data LoginInput object containing email and password.
   * @returns AuthResponse with user and JWT token.
   */
  static async login(data: LoginInput): Promise<AuthResponse> {
    const { email, password } = data;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error('Invalid email or password.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid email or password.');
    }

    const token = this.generateToken(user.id);

    return { user, token };
  }

  /**
   * Generates a JWT token.
   * @param userId The user ID to encode in the token.
   * @returns A JWT token string.
   */
  public static generateToken(userId: string): string {
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
  }

  /**
   * Sets up Passport strategies for SSO authentication.
   * @param passport Passport instance.
   */
  static setupSSO(passport: PassportStatic): void {
    passport.use(
      new GoogleStrategy(
        {
          clientID: GOOGLE_CLIENT_ID,
          clientSecret: GOOGLE_CLIENT_SECRET,
          callbackURL: `${BASE_URL}/auth/google/callback`,
        },
        async (accessToken, refreshToken, profile: Profile, done) => {
          try {
            const email = profile.emails?.[0]?.value;
            if (!email) {
              return done(new Error('Email not available from Google profile'), false);
            }

            let user = await prisma.user.findUnique({ where: { email } });

            if (!user) {
              user = await prisma.user.create({
                data: {
                  name: profile.displayName || 'Unnamed User',
                  email,
                  avatarUrl: profile.photos?.[0]?.value || '',
                  password: '', // No password for SSO users
                  location: '', // Default location
                  phoneNumber: '', // Default phone number for SSO users
                },
              });
            }

            return done(null, user);
          } catch (err) {
            return done(err, false);
          }
        }
      )
    );

    passport.serializeUser((user: any, done) => {
      done(null, user.id);
    });

    passport.deserializeUser(async (id: string, done) => {
      try {
        const user = await prisma.user.findUnique({ where: { id } });
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    });
  }
}
