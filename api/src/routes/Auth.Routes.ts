import { Router } from 'express';
import AuthController from '../controllers/Auth.Controller';

const router = Router();

router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);
router.post('/auth/logout', AuthController.logout);
router.get('/auth/google', AuthController.googleLogin);
router.post('/auth/google/callback', AuthController.googleCallback);
router.post('/auth/refresh-token', AuthController.refreshToken);

export default router;
