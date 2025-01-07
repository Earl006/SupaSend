import { Router } from 'express';
import PasswordResetController from '../controllers/PasswordReset.Controller';

const router = Router();

router.post('/', PasswordResetController.requestPasswordResetCode);
router.post('/verify', PasswordResetController.verifyPasswordResetCode);
router.post('/reset', PasswordResetController.resetPassword);

export default router;
