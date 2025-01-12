import { Router } from 'express';
import PaymentController from '../controllers/Payment.Controller';

const router = Router();

router.get('/', PaymentController.getAllPayments);
// router.post('/', PaymentController.createPayment);
router.get('/:id', PaymentController.getPaymentById);
// router.put('/:id', PaymentController.updatePayment);
// router.delete('/:id', PaymentController.deletePayment);
router.get('/order/:orderId', PaymentController.getPaymentsByOrderId);
router.get('/status', PaymentController.getPaymentsByStatus);

export default router;
