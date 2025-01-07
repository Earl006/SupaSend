import { Router } from 'express';
import OrderController from '../controllers/Order.Controller';

const router = Router();

router.get('/', OrderController.getAllOrders);
router.post('/', OrderController.createOrder);
router.get('/:id', OrderController.getOrderById);
router.put('/:id', OrderController.updateOrder);
router.delete('/:id', OrderController.deleteOrder);
router.get('/customer/:customerId', OrderController.getOrdersByCustomerId);
router.get('/status/:status', OrderController.getOrdersByStatus);
router.put('/:id/status', OrderController.updateOrderStatus);
router.put('/:id/checkout', OrderController.checkoutOrder);

export default router;
