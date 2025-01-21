import prisma from '../../config/Prisma.Config';
import { Payment } from '@prisma/client';

class PaymentService {
    async getAllPayments(userId: string) {
        throw new Error('Method not implemented.');
    }
    async getPaymentsByStatus(userId: string, status: string) {
        throw new Error('Method not implemented.');
    }
    async makePayment(userId: string, paymentData: any) {
        throw new Error('Method not implemented.');
    }
    async getPaymentsByOrderId(userId: string, orderId: string) {
        throw new Error('Method not implemented.');
    }
    async getPaymentById(userId: string, paymentId: string) {
        throw new Error('Method not implemented.');
    }
    async deletePayment(userId: string, paymentId: string) {
        throw new Error('Method not implemented.');
    }
}

export default PaymentService;
