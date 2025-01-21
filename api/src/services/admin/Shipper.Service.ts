import prisma from '../../config/Prisma.Config';
import { Shipper } from '@prisma/client';

class ShipperService {
    async getAllShippers() {
        throw new Error('Method not implemented.');
    }
    async createShipper(shipperData: any) {
        throw new Error('Method not implemented.');
    }
    async getShipperById(shipperId: string) {
        throw new Error('Method not implemented.');
    }
    async updateShipper(shipperId: string, shipperData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteShipper(shipperId: string) {
        throw new Error('Method not implemented.');
    }
    async getShippersByZoneId(zoneId: string) {
        throw new Error('Method not implemented.');
    }
}

export default ShipperService;
