import prisma from '../../config/Prisma.Config';
import { Order } from '@prisma/client';

class OrderService {
    async getOrdersByCustomerId(customerId: string) {
        throw new Error('Method not implemented.');
    }
}

export default OrderService;
