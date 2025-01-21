import { Router } from 'express';
import CategoryController from '../../controllers/admin/Category.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/categories', CategoryController.getAllCategories);
router.post('/categories', CategoryController.createCategory);
router.get('/categories/:id', CategoryController.getCategoryById);
router.put('/categories/:id', CategoryController.updateCategory);
router.delete('/categories/:id', CategoryController.deleteCategory);

export default router;
