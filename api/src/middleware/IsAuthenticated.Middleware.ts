import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import createError from 'http-errors';
import { UserRole } from '../interfaces/User.Interface';

const IsAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.accessToken || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authentication token is missing.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string; role: UserRole };
        req.user = { id: decoded.userId, role: decoded.role };
        next();
    } catch (error) {
        next(createError(401, 'Invalid or expired authentication token.'));
    }
};

export default IsAuthenticated;
