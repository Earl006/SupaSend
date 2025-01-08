import { Request, Response, NextFunction } from 'express';
import PasswordResetService from '../services/PasswordReset.Service';

class PasswordResetController {

    private passwordResetService: PasswordResetService;

    constructor() {
        this.passwordResetService = new PasswordResetService();
    }

    requestPasswordResetCode = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    verifyPasswordResetCode = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    resetPassword = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new PasswordResetController();
