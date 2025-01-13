import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import AuthService from '../services/Auth.Service';

class AuthController {
	private authService: AuthService;

	constructor() {
		this.authService = new AuthService();
	}

	register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { name, email, password } = req.body;
			const { user, token } = await this.authService.register(name, email, password);
			const refreshToken = this.authService.generateRefreshToken(user);
			await this.authService.saveRefreshToken(user.id, refreshToken);

			res
				.status(201)
				.cookie('accessToken', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
				.cookie('refreshToken', refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production', path: '/auth/refresh-token' })
				.json({ message: 'Registration successful', user });
		} catch (error: unknown) {
			next(error);
		}
	};

	login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { email, password } = req.body;
			const { user, token } = await this.authService.login(email, password);
			const refreshToken = this.authService.generateRefreshToken(user);
			await this.authService.saveRefreshToken(user.id, refreshToken);

			res
				.status(200)
				.cookie('accessToken', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
				.cookie('refreshToken', refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production', path: '/auth/refresh-token' })
				.json({ message: 'Login successful', user });
		} catch (error: unknown) {
			next(error);
		}
	};

	logout = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { refreshToken } = req.cookies;

			if (refreshToken) {
				await this.authService.revokeRefreshToken(refreshToken);
			}

			res
				.status(200)
				.clearCookie('accessToken', { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
				.clearCookie('refreshToken', { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
				.json({ message: 'Logout successful' });
		} catch (error: unknown) {
			next(error);
		}
	};

	googleLogin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const authUrl = await this.authService.googleLogin();
			res.status(200).json({ authUrl });
		} catch (error: unknown) {
			next(error);
		}
	};

	googleCallback = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { idToken } = req.body;
			const { user, token } = await this.authService.googleCallback(idToken);
			const refreshToken = this.authService.generateRefreshToken(user);

			res
				.status(200)
				.cookie('accessToken', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
				.cookie('refreshToken', refreshToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production', path: '/auth/refresh-token' })
				.json({ message: 'Google login successful', user });
		} catch (error: unknown) {
			next(error);
		}
	};

	refreshToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { refreshToken } = req.cookies;

			if (!refreshToken) throw createError(401, 'Refresh token missing');

			const decoded = await this.authService.validateRefreshToken(refreshToken);

			const user = await this.authService.findUserByID(decoded.userId);
			const newAccessToken = this.authService.generateAccessToken(user);

			res
				.status(200)
				.cookie('accessToken', newAccessToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
				.json({ message: 'Access token refreshed' });
		} catch (error: unknown) {
			next(error);
		}
	};
}

export default new AuthController();
