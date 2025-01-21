import { Router } from 'express';
import PaymentController from '../../controllers/admin/Payment.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/order/:orderId', PaymentController.getPaymentsByOrderId);
router.get('/:id', PaymentController.getPaymentById);

export default router;
