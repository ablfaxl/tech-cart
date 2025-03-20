import { NextFunction, Request, Response, Router } from 'express';
import { createCategory, getCategories } from './category.controller';

const router: Router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getCategories(req, res).catch(next);
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  createCategory(req, res).catch(next);
});

export { router as categoryRoutes };
