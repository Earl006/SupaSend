import prisma from '../../config/Prisma.Config';
import { Delivery } from '@prisma/client';

class DeliveryService {
    async getAllDeliveries(userId: string) {
        throw new Error('Method not implemented.');
    }
    async getDeliveriesByStatus(userId: string, status: string) {
        throw new Error('Method not implemented.');
    }
    async confirmDelivery(userId: string, deliveryId: string) {
        throw new Error('Method not implemented.');
    }
    async getDeliveryById(userId: string, deliveryId: string) {
        throw new Error('Method not implemented.');
    }
    async deleteDelivery(userId: string, deliveryId: string) {
        throw new Error('Method not implemented.');
    }
}

export default DeliveryService;
