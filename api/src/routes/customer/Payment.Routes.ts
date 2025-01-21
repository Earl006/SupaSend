import { Router } from 'express';
import PaymentController from '../../controllers/customer/Payment.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('CUSTOMER'));

router.get('/payments', PaymentController.getAllPayments);
router.get('/payments/status', PaymentController.getPaymentsByStatus);
router.post('/payments/:orderId', PaymentController.makePayment);
router.get('/payments/order/:orderId', PaymentController.getPaymentsByOrderId);
router.get('/payments/:id', PaymentController.getPaymentById);
router.delete('/:id', PaymentController.deletePayment);

export default router;
