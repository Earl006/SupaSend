import prisma from '../../config/Prisma.Config';
import { Order } from '@prisma/client';

class OrderService {
    async getAllOrders(userId: string) {
        throw new Error('Method not implemented.');
    }
    async getOrdersByStatus(userId: string, status: string) {
        throw new Error('Method not implemented.');
    }
    async checkoutOrder(userId: string, orderId: string, checkoutDetails: any) {
        throw new Error('Method not implemented.');
    }
    async deleteOrder(userId: string, orderId: string) {
        throw new Error('Method not implemented.');
    }
}

export default OrderService;
