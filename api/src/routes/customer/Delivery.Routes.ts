import { Router } from 'express';
import DeliveryController from '../../controllers/customer/Delivery.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('CUSTOMER'));

router.post('/deliveries/:id/resend-code', DeliveryController.resendDeliveryCode);
router.get('/deliveries/order/:orderId', DeliveryController.getDeliveriesByOrder);
router.get('/deliveries/:id', DeliveryController.getDeliveryById);

export default router;
