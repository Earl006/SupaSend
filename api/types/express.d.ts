import { UserRole } from '../src/interfaces/User.Interface';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role: UserRole;
            };
        }
    }
}
