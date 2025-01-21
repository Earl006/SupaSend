import { Router } from 'express';
import OrderController from '../../controllers/admin/Order.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/orders/customer/:customerId', OrderController.getOrdersByCustomerId);

export default router;
