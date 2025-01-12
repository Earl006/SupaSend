import { Router } from 'express';
import DeliveryController from '../controllers/Delivery.Controller';

const router = Router();

router.get('/', DeliveryController.getAllDeliveries);
router.post('/', DeliveryController.createDelivery);
router.get('/:id', DeliveryController.getDeliveryById);
router.put('/:id', DeliveryController.updateDelivery);
router.delete('/:id', DeliveryController.deleteDelivery);
router.get('/order/:orderId', DeliveryController.getDeliveriesByOrder);
router.get('/shipper/:shipperId', DeliveryController.getDeliveriesByShipper);
router.get('/status', DeliveryController.getDeliveriesByStatus);
router.put('/:id/status', DeliveryController.updateDeliveryStatus);

export default router;
