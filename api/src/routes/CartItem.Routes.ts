import { Router } from 'express';
import CartItemController from '../controllers/CartItem.Controller';

const router = Router();

router.get('/', CartItemController.getAllCartItems);
router.post('/:cartId', CartItemController.createCartItem);
router.get('/:id', CartItemController.getCartItemById);
router.put('/:id', CartItemController.updateCartItem);
router.delete('/:id', CartItemController.deleteCartItem);
router.get('/cart/:cartId', CartItemController.getCartItemsByCartId);

export default router;
