import { Router } from 'express';
import BusinessOrderController from '../../controllers/shipper/BusinessOrder.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('SHIPPER'));

router.patch('/business-orders/:id/confirm-pickup', BusinessOrderController.confirmPickup);

export default router;
