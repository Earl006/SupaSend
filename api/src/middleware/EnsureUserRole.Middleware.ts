import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { UserRole } from '../interfaces/User.Interface';

const EnsureUserRole = (roles: UserRole | UserRole[]) => {
    const allowedRoles = Array.isArray(roles) ? roles.map((role) => role.toUpperCase()) : [roles.toUpperCase()];

    return (req: Request, res: Response, next: NextFunction): void => {
        if (!req.user) {
            return next(createError(401, 'Unauthorized access: User is not authenticated.'));
        }

        const userRole = req.user.role.toUpperCase();

        if (!allowedRoles.includes(userRole)) {
            return next(createError(403, 'Access forbidden: Insufficient permissions.'));
        }

        next();
    };
};

export default EnsureUserRole;
