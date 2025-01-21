import prisma from '../../config/Prisma.Config';
import { BusinessOrder } from '@prisma/client';

class BusinessOrderService {
    async getAllBusinessOrders(userId: string) {
        throw new Error('Method not implemented.');
    }
    async getBusinessOrdersByStatus(userId: string, status: string) {
        throw new Error('Method not implemented.');
    }
    async acceptOrder(userId: string, businessOrderId: string) {
        throw new Error('Method not implemented.');
    }
    async declineOrder(userId: string, businessOrderId: string) {
        throw new Error('Method not implemented.');
    }
    async requestPickup(userId: string, businessOrderId: string) {
        throw new Error('Method not implemented.');
    }
    async deleteBusinessOrder(userId: string, businessOrderId: string) {
        throw new Error('Method not implemented.');
    }
}

export default BusinessOrderService;
