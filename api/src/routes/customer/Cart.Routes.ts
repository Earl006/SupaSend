import { Router } from 'express';
import CartController from '../../controllers/customer/Cart.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('CUSTOMER'));

router.get('/carts', CartController.getAllCarts);
router.post('/carts', CartController.createCart);
router.post('/carts/:id/order', CartController.createOrderFromCart);
router.delete('/carts/:id', CartController.deleteCart);

export default router;
