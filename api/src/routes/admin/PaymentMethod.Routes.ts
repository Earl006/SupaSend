import { Router } from 'express';
import PaymentMethodController from '../../controllers/admin/PaymentMethod.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/payment-methods', PaymentMethodController.getAllPaymentMethods);
router.post('/payment-methods', PaymentMethodController.createPaymentMethod);
router.put('/payment-methods/:id/activate', PaymentMethodController.activatePaymentMethod);
router.put('/payment-methods/:id/deactivate', PaymentMethodController.deactivatePaymentMethod);
router.get('/payment-methods/:id', PaymentMethodController.getPaymentMethodById);
router.put('/payment-methods/:id', PaymentMethodController.updatePaymentMethod);
router.delete('/payment-methods/:id', PaymentMethodController.deletePaymentMethod);

export default router;
