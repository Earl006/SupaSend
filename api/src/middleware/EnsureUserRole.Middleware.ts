import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../interfaces/User.Interface';

const EnsureUserRole = (role: UserRole) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized access: User is not authenticated.' });
        }

        if (req.user?.role !== role) {
            return res.status(403).json({ message: `Access forbidden: Requires ${role} role.` });
        }

        next();
    };
};

export default EnsureUserRole;
