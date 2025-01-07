import { Router } from 'express';
import CartController from '../controllers/Cart.Controller';

const router = Router();

router.get('/', CartController.getAllCarts);
router.post('/', CartController.createCart);
router.get('/:id', CartController.getCartById);
router.put('/:id', CartController.updateCart);
router.delete('/:id', CartController.deleteCart);
router.get('/customer/:customerId', CartController.getCartsByCustomerId);
router.post('/:id/order', CartController.createOrderFromCart);

export default router;
