import { Request, Response, NextFunction } from 'express';
import PasswordResetService from '../services/PasswordReset.Service';

class PasswordResetController {

    private passwordResetService: PasswordResetService;

    constructor() {
        this.passwordResetService = new PasswordResetService();
    }

    requestPasswordResetCode = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    verifyPasswordResetCode = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    resetPassword = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new PasswordResetController();
