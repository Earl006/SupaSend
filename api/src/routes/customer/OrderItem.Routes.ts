import { Router } from 'express';
import OrderItemController from '../../controllers/customer/OrderItem.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('CUSTOMER'));

router.get('/order-items/order/:orderId', OrderItemController.getOrderItemsByOrderId);

export default router;
