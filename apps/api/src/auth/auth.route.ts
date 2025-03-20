import { Router } from 'express';
import AuthController from './auth.controller';
import AuthService from './auth.service';

const router:Router = Router();
const authService = new AuthService();
const authController = new AuthController(authService);

router.post('/signup', authController.register);
router.post('/signin', authController.login);

export { router as authRoutes };
