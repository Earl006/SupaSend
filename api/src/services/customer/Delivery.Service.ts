import prisma from '../../config/Prisma.Config';
import { Delivery } from '@prisma/client';

class DeliveryService {
    async resendDeliveryCode(userId: string, deliveryId: string) {
        throw new Error('Method not implemented.');
    }
    async getDeliveriesByOrder(userId: string, orderId: string) {
        throw new Error('Method not implemented.');
    }
    async getDeliveryById(userId: string, deliveryId: string) {
        throw new Error('Method not implemented.');
    }
}

export default DeliveryService;
