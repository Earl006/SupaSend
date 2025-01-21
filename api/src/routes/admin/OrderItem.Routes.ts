import { Router } from 'express';
import OrderItemController from '../../controllers/admin/OrderItem.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/order-items/order/:orderId', OrderItemController.getOrderItemsByOrderId);
router.get('/order-items/business-order/:bussinessOrderId', OrderItemController.getOrderItemsByBusinessOrderId);

export default router;
