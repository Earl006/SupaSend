import { Router } from 'express';
import OrderController from '../../controllers/customer/Order.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('CUSTOMER'));

router.get('/orders', OrderController.getAllOrders);
router.get('/orders/status', OrderController.getOrdersByStatus);
router.put('/orders/:id/checkout', OrderController.checkoutOrder);
router.delete('/orders/:id', OrderController.deleteOrder);

export default router;
