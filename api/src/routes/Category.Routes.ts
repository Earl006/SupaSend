import { Router } from 'express';
import CategoryController from '../controllers/Category.Controller';

const router = Router();

router.get('/categories', CategoryController.getAllCategories);

export default router;
