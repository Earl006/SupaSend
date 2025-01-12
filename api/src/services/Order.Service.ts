import prisma from '../config/Prisma.Config';
import { Order } from '@prisma/client';

class OrderService {
    async getAllOrders() {
        throw new Error('Method not implemented.');
    }
    async getOrderById(orderId: string) {
        throw new Error('Method not implemented.');
    }
    async createOrder(cartId: any, userId: string) {
        throw new Error('Method not implemented.');
    }
    async updateOrder(orderId: string, updatedOrderData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteOrder(orderId: string) {
        throw new Error('Method not implemented.');
    }
    async getOrdersByCustomerId(customerId: string) {
        throw new Error('Method not implemented.');
    }
    async getOrdersByStatus(arg0: string) {
        throw new Error('Method not implemented.');
    }
    async updateOrderStatus(orderId: string, status: any) {
        throw new Error('Method not implemented.');
    }
    async checkoutOrder(orderId: string, paymentDetails: any) {
        throw new Error('Method not implemented.');
    }
}

export default OrderService;
