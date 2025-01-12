import prisma from '../config/Prisma.Config';
import { Delivery } from '@prisma/client';

class DeliveryService {
    async getAllDeliveries() {
        throw new Error('Method not implemented.');
    }
    async getDeliveryById(deliveryId: string) {
        throw new Error('Method not implemented.');
    }
    async createDelivery(deliveryData: any) {
        throw new Error('Method not implemented.');
    }
    async updateDelivery(deliveryId: string, deliveryData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteDelivery(deliveryId: string) {
        throw new Error('Method not implemented.');
    }
    async getDeliveriesByOrder(orderId: string) {
        throw new Error('Method not implemented.');
    }
    async getDeliveriesByShipper(shipperId: string) {
        throw new Error('Method not implemented.');
    }
    async getDeliveriesByStatus(arg0: string) {
        throw new Error('Method not implemented.');
    }
    async updateDeliveryStatus(deliveryId: string, status: any) {
        throw new Error('Method not implemented.');
    }
}

export default DeliveryService;
