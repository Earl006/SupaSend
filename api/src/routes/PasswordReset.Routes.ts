import { Router } from 'express';
import PasswordResetController from '../controllers/PasswordReset.Controller';

const router = Router();

router.post('/forgot-password', PasswordResetController.requestPasswordReset);
router.post('/reset-password', PasswordResetController.resetPassword);

export default router;
