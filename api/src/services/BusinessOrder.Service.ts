import prisma from '../config/Prisma.Config';
import { BusinessOrder } from '@prisma/client';

class BusinessOrderService {
    async getAllBusinessOrders() {
        throw new Error('Method not implemented.');
    }
    async getBusinessOrderById(businessOrderId: string) {
        throw new Error('Method not implemented.');
    }
    async createBusinessOrder(orderId: string) {
        throw new Error('Method not implemented.');
    }
    async updateBusinessOrder(businessOrderId: string, businessOrderData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteBusinessOrder(businessOrderId: string) {
        throw new Error('Method not implemented.');
    }
    async getBusinessOrdersByOrderId(orderId: string) {
        throw new Error('Method not implemented.');
    }
    async getBusinessOrdersByStatus(arg0: string) {
        throw new Error('Method not implemented.');
    }
    async updateBusinessOrderStatus(businessOrderId: string, status: any) {
        throw new Error('Method not implemented.');
    }
}

export default BusinessOrderService;
