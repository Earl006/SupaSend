import { Router } from 'express';
import OrderItemController from '../controllers/OrderItem.Controller';

const router = Router();

router.get('/', OrderItemController.getAllOrderItems);
router.post('/:orderId', OrderItemController.createOrderItem);
router.get('/:id', OrderItemController.getOrderItemById);
router.put('/:id', OrderItemController.updateOrderItem);
router.delete('/:id', OrderItemController.deleteOrderItem);
router.get('/order/:orderId', OrderItemController.getOrderItemsByOrderId);
router.get('/business/:businessId/order/:orderId', OrderItemController.getOrderItemsForBusiness);

export default router;
