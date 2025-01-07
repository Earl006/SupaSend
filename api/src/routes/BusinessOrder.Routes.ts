import { Router } from 'express';
import BusinessOrderController from '../controllers/BusinessOrder.Controller';

const router = Router();

router.get('/', BusinessOrderController.getAllBusinessOrders);
router.post('/', BusinessOrderController.createBusinessOrder);
router.get('/:id', BusinessOrderController.getBusinessOrderById);
router.put('/:id', BusinessOrderController.updateBusinessOrder);
router.delete('/:id', BusinessOrderController.deleteBusinessOrder);
router.get('/order/:orderId', BusinessOrderController.getBusinessOrdersByOrderId);
router.put('/:id/status', BusinessOrderController.updateBusinessOrderStatus);

export default router;
