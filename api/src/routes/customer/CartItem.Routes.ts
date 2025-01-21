import { Router } from 'express';
import CartItemController from '../../controllers/customer/CartItem.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('CUSTOMER'));

router.post('/cart-items/:cartId', CartItemController.createCartItem);
router.put('/cart-items/:id', CartItemController.updateCartItem);
router.delete('/cart-items/:id', CartItemController.deleteCartItem);
router.get('/cart-items/cart/:cartId', CartItemController.getCartItemsByCartId);

export default router;
