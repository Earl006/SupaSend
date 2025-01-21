import { Router } from 'express';
import BusinessOrderController from '../../controllers/business/BusinessOrder.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('BUSINESS'));

router.get('/business-orders', BusinessOrderController.getAllBusinessOrders);
router.get('/business-orders/status', BusinessOrderController.getBusinessOrdersByStatus);
router.patch('/business-orders/:id/accept', BusinessOrderController.acceptOrder);
router.patch('/business-orders/:id/decline', BusinessOrderController.declineOrder);
router.patch('/business-orders/:id/ready-for-pickup', BusinessOrderController.requestPickup);
router.delete('/business-orders/:id', BusinessOrderController.deleteBusinessOrder);

export default router;
