import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import { OAuth2Client } from 'google-auth-library';
import prisma from '../config/Prisma.Config';

class AuthService {

	private googleClient: OAuth2Client;

	constructor() {
		this.googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
	}

	addDurationToDate(duration: string): Date {
		const match = duration.match(/^(\d+)([a-zA-Z]+)$/);
		if (!match) {
			throw createError(500, "Invalid duration format in environment variable. Expected a value like '7d', '1h', etc.");
		}

		const [, value, unit] = match;
		const amount = parseInt(value, 10);

		let now = new Date();

		switch (unit) {
			case 'd':
				now.setDate(now.getDate() + amount);
				break;
			case 'h':
				now.setHours(now.getHours() + amount);
				break;
			case 'm':
				now.setMinutes(now.getMinutes() + amount);
				break;
			case 's':
				now.setSeconds(now.getSeconds() + amount);
				break;
			default:
				throw createError(500, `Unsupported time unit in environment variable: ${unit}. Supported units: 'd', 'h', 'm', 's'.`);
		}

		return now;
	}

	generateAccessToken(user: any): string {
		const payload = { userId: user.id, role: user.role };
		return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRY as string });
	}

	generateRefreshToken(user: any): string {
		const payload = { userId: user.id, role: user.role };
		return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY as string });
	}

	async hashPassword(password: string): Promise<{ hash: string; salt: string }> {
		// const saltRounds = process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS, 10) : 10;
		// const salt = bcrypt.genSaltSync(saltRounds);
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);
		return { hash, salt };
	}

	async validatePassword(password: string, hash: string): Promise<boolean> {
		return bcrypt.compareSync(password, hash);
	}

	async findUserByEmail(email: string) {
		return await prisma.user.findUnique({
			where: { email, deletedAt: null }
		});
	}

	async findUserByID(id: string) {
		const user = await prisma.user.findUnique({
			where: { id, deletedAt: null }
		});

		if (!user) throw createError(404, 'User not found');
		return user;
	}

	async saveRefreshToken(userId: string, refreshToken: string): Promise<void> {
		const expiresAt = this.addDurationToDate(process.env.REFRESH_TOKEN_EXPIRY as string);

		await prisma.refreshToken.create({
			data: { userId, token: refreshToken, expiresAt },
		});
	}

	async validateRefreshToken(refreshToken: string): Promise<any> {
		try {
			return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string);
		} catch (error) {
			throw createError(401, 'Invalid refresh token');
		}
	}

	async revokeRefreshToken(refreshToken: string): Promise<void> {
		await prisma.refreshToken.deleteMany({
			where: { token: refreshToken },
		});
	}

	async register(name: string, email: string, password: string) {
		const existingUser = await this.findUserByEmail(email);
		if (existingUser) throw createError(400, 'Email is already registered.');

		const { hash, salt } = await this.hashPassword(password);

		const user = await prisma.user.create({
			data: {
				name,
				email,
				password: hash,
				salt,
				role: 'CUSTOMER',
				customer: { create: {} },
			},
		});

		const token = this.generateAccessToken(user);
		return { user, token };
	}

	async login(email: string, password: string) {
		const user = await this.findUserByEmail(email);
		if (!user || !user.password) throw createError(401, 'Invalid email or password.');

		const isPasswordValid = await this.validatePassword(password, user.password);
		if (!isPasswordValid) throw createError(401, 'Invalid email or password.');

		const token = this.generateAccessToken(user);
		return { user, token };
	}

	async googleLogin(): Promise<string> {
		const authUrl = this.googleClient.generateAuthUrl({
			access_type: 'offline',
			scope: ['profile', 'email', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
		});
		return authUrl;
	}

	async googleCallback(idToken: string): Promise<{ user: any; token: string }> {
		const ticket = await this.googleClient.verifyIdToken({
			idToken,
			audience: process.env.GOOGLE_CLIENT_ID,
		});
		const payload = ticket.getPayload();

		if (!payload || !payload.email) throw createError(400, 'Invalid Google token.');

		let user = await this.findUserByEmail(payload.email);

		if (!user) {
			user = await prisma.user.create({
				data: {
					name: payload.name || 'Unknown User',
					email: payload.email,
					avatarUrl: payload.picture,
					password: '',
					salt: '',
					role: 'CUSTOMER',
					customer: { create: {} },
				},
			});
		} else {
			// Update user data if it has changed.
			user = await prisma.user.update({
				where: { id: user.id },
				data: {
					name: payload.name || user.name,
					avatarUrl: payload.picture || user.avatarUrl,
				},
			});
		}

		const token = this.generateAccessToken(user);
		return { user, token };
	}
}

export default AuthService;
