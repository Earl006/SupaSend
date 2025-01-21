import { Router } from 'express';
import BusinessOrderController from '../../controllers/admin/BusinessOrder.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/business-orders/business/:businessId', BusinessOrderController.getBusinessOrdersByBusinessId);

export default router;
