import prisma from '../../config/Prisma.Config';
import { OrderItem } from '@prisma/client';

class OrderItemService {
    async getOrderItemsByOrderId(orderId: string) {
        throw new Error('Method not implemented.');
    }
    async getOrderItemsByBusinessOrderId(businessOrderId: string) {
        throw new Error('Method not implemented.');
    }
}

export default OrderItemService;
