import prisma from '../../config/Prisma.Config';
import { Delivery } from '@prisma/client';

class DeliveryService {
    async getDeliveriesByShipperId(shipperId: string) {
        throw new Error('Method not implemented.');
    }
    async getDeliveriesByOrderId(orderId: string) {
        throw new Error('Method not implemented.');
    }
    async getDeliveryById(deliveryId: string) {
        throw new Error('Method not implemented.');
    }
}

export default DeliveryService;
