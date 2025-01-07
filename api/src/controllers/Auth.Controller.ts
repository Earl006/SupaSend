import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../services/Auth.Service';
import { LoginInput, RegisterInput } from '../interfaces/Auth.Interface';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const data: RegisterInput = req.body;
      const response = await AuthService.register(data);
      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: response
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error instanceof Error ? error.message : 'Registration failed'
      });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const data: LoginInput = req.body;
      const response = await AuthService.login(data);
      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: response
      });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: error instanceof Error ? error.message : 'Authentication failed'
      });
    }
  }
  
  static async logout(req: Request, res: Response) {
    
  }

  static googleLogin(req: Request, res: Response, next: NextFunction): void {
    try {
      next();
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Google authentication failed'
      });
    }
  }

  static googleCallback(req: Request, res: Response, next: NextFunction): void {
    try {
      if (!req.user) {
        throw new Error('Authentication failed');
      }
      const user = req.user as { id: string };
      const token = AuthService.generateToken(user.id);
      const redirectUrl = `${process.env.FRONTEND_URL}/dashboard?token=${token}`;
      res.redirect(redirectUrl);
    } catch (error) {
      res.redirect(`${process.env.FRONTEND_URL}/login?error=authentication_failed`);
    }
  }
}