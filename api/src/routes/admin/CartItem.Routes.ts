import { Router } from 'express';
import CartItemController from '../../controllers/admin/CartItem.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/cart-items/cart/:cartId', CartItemController.getCartItemsByCartId);

export default router;
