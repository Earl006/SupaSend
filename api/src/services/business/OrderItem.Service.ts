import prisma from '../../config/Prisma.Config';
import { OrderItem } from '@prisma/client';

class OrderItemService {
    async getOrderItemsByBusinessOrderId(userId: string, businessId: string) {
        throw new Error('Method not implemented.');
    }
}

export default OrderItemService;
