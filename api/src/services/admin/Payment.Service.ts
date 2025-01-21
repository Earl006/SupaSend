import prisma from '../../config/Prisma.Config';
import { Payment } from '@prisma/client';

class PaymentService {
    async getPaymentsByOrderId(orderId: string) {
        throw new Error('Method not implemented.');
    }
    async getPaymentById(paymentId: string) {
        throw new Error('Method not implemented.');
    }
}

export default PaymentService;
