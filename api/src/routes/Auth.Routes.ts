import { Router } from 'express';
import passport from 'passport';
import { AuthController } from '../controllers/Auth.Controller';

const router = Router();

// Local auth routes
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);

// Google OAuth routes
router.get('/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] }),
  AuthController.googleLogin
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  AuthController.googleCallback
);

export default router;