import { Router } from 'express';
import DeliveryController from '../../controllers/shipper/Delivery.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('SHIPPER'));

router.get('/deliveries', DeliveryController.getAllDeliveries);
router.get('/deliveries/status', DeliveryController.getDeliveriesByStatus);
router.patch('/deliveries/:id/confirm-delivery', DeliveryController.confirmDelivery);
router.get('/deliveries/:id', DeliveryController.getDeliveryById);
router.delete('/deliveries/:id', DeliveryController.deleteDelivery);

export default router;
