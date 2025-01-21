import { Router } from 'express';
import OrderItemController from '../../controllers/business/OrderItem.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('BUSINESS'));

router.get('/order-items/order/:businessOrderId', OrderItemController.getOrderItemsByBusinessOrderId);

export default router;
