import { Router } from 'express';
import ProductController from '../../controllers/admin/Product.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/products/business/:businessId', ProductController.getProductsByBusinessId);
router.get('/products/:id', ProductController.getProductById);
router.delete('/products/:id', ProductController.deleteProduct);

export default router;
