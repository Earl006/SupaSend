import prisma from '../config/Prisma.Config';
import { OrderItem } from '@prisma/client';

class OrderItemService {
    async getAllOrderItems() {
        throw new Error('Method not implemented.');
    }
    async getOrderItemById(orderItemId: string) {
        throw new Error('Method not implemented.');
    }
    async createOrderItem(orderId: string, orderItemData: any) {
        throw new Error('Method not implemented.');
    }
    async updateOrderItem(orderItemId: string, orderItemData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteOrderItem(orderItemId: string) {
        throw new Error('Method not implemented.');
    }
    async getOrderItemsByOrderId(orderId: string) {
        throw new Error('Method not implemented.');
    }
    async getOrderItemsForBusiness(businessId: string) {
        throw new Error('Method not implemented.');
    }
}

export default OrderItemService;
