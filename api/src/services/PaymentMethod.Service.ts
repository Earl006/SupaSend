import prisma from '../config/Prisma.Config';
import { PaymentMethod } from '@prisma/client';

class PaymentMethodService {
    async getAllPaymentMethods() {
        throw new Error('Method not implemented.');
    }
    async getPaymentMethodById(id: string) {
        throw new Error('Method not implemented.');
    }
    async createPaymentMethod(body: any) {
        throw new Error('Method not implemented.');
    }
    async updatePaymentMethod(id: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async deletePaymentMethod(id: string) {
        throw new Error('Method not implemented.');
    }
    async activatePaymentMethod(id: string) {
        throw new Error('Method not implemented.');
    }
    async deactivatePaymentMethod(id: string) {
        throw new Error('Method not implemented.');
    }
}

export default PaymentMethodService;
