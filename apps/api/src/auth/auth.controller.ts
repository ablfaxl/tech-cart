import { Request, Response } from 'express';
import AuthService from './auth.service';

class AuthController {
  // Use arrow functions to bind `this` correctly
  constructor(private authService: AuthService) {}

  // Define methods as instance properties (arrow functions)
  register = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await this.authService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.log('Error registering', error);
      res.status(400).json({ error: 'Registration failed' });
    }
  };

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const token = await this.authService.login(req.body);
      res.json({ token });
    } catch (error) {
      console.log('Invalid credentials', error);
      res.status(401).json({ error: 'Invalid credentials' });
    }
  };
}

export default AuthController;
