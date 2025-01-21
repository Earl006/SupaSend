import { Router } from 'express';
import DeliveryController from '../../controllers/admin/Delivery.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/deliveries/shipper/:shipperId', DeliveryController.getDeliveriesByShipperId);
router.get('/deliveries/order/:orderId', DeliveryController.getDeliveriesByOrderId);
router.get('/deliveries/:id', DeliveryController.getDeliveryById);

export default router;
