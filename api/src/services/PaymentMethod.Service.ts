import prisma from '../config/Prisma.Config';
import { PaymentMethod } from '@prisma/client';

class PaymentMethodService {
    async getAllPaymentMethods() {
        throw new Error('Method not implemented.');
    }
}

export default PaymentMethodService;
