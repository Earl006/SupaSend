import { Router } from 'express';
import PaymentMethodController from '../controllers/PaymentMethod.Controller';

const router = Router();

router.get('/', PaymentMethodController.getAllPaymentMethods);
router.post('/', PaymentMethodController.createPaymentMethod);
router.get('/:id', PaymentMethodController.getPaymentMethodById);
router.put('/:id', PaymentMethodController.updatePaymentMethod);
router.delete('/:id', PaymentMethodController.deletePaymentMethod);
router.put('/:id/activate', PaymentMethodController.activatePaymentMethod);
router.put('/:id/deactivate', PaymentMethodController.deactivatePaymentMethod);

export default router;
