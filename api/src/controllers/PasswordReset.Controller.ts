import { Request, Response, NextFunction } from 'express';
import PasswordResetService from '../services/PasswordReset.Service';

class PasswordResetController {

    private passwordResetService: PasswordResetService;

    constructor() {
        this.passwordResetService = new PasswordResetService();
    }

    requestPasswordReset = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { email } = req.body;
            await this.passwordResetService.generateResetToken(email);

            res.status(200).json({
                message: 'Password reset link has been sent to your email if the account exists.',
            });
        } catch (error: unknown) {
            next(error);
        }
    };

    resetPassword = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { token, newPassword } = req.body;
            await this.passwordResetService.resetPassword(token, newPassword);

            res.status(200).json({ message: 'Password has been reset successfully.' });
        } catch (error: unknown) {
            next(error);
        }
    };
}

export default new PasswordResetController();
