import { Router } from 'express';
import AuthController from '../controllers/Auth.Controller';

const router = Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.get('/google', AuthController.googleLogin);
router.post('/google/callback', AuthController.googleCallback);
router.post('/refresh-token', AuthController.refreshToken);

export default router;
