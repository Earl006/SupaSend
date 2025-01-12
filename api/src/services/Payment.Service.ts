import prisma from '../config/Prisma.Config';
import { Payment } from '@prisma/client';

class PaymentService {
    async getAllPayments() {
        throw new Error('Method not implemented.');
    }
    async getPaymentById(paymentId: string) {
        throw new Error('Method not implemented.');
    }
    async createPayment(paymentData: any) {
        throw new Error('Method not implemented.');
    }
    async updatePayment(paymentId: string, paymentData: any) {
        throw new Error('Method not implemented.');
    }
    async deletePayment(paymentId: string) {
        throw new Error('Method not implemented.');
    }
    async getPaymentsByOrderId(orderId: string) {
        throw new Error('Method not implemented.');
    }
    async getPaymentsByStatus(arg0: string) {
        throw new Error('Method not implemented.');
    }
}

export default PaymentService;
