import prisma from '../../config/Prisma.Config';
import { OrderItem } from '@prisma/client';

class OrderItemService {
    async getOrderItemsByOrderId(userId: string, orderId: string) {
        throw new Error('Method not implemented.');
    }
}

export default OrderItemService;
