import { Router } from 'express';
import CartController from '../../controllers/admin/Cart.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/carts/customer/:customerId', CartController.getCartsByCustomerId);

export default router;
