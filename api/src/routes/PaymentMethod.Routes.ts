import { Router } from 'express';
import PaymentMethodController from '../controllers/PaymentMethod.Controller';

const router = Router();

router.get('/payment-methods', PaymentMethodController.getAllPaymentMethods);

export default router;
