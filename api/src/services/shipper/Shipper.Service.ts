import prisma from '../../config/Prisma.Config';
import { Shipper } from '@prisma/client';

class ShipperService {
    async getShipperProfile(userId: string) {
        throw new Error('Method not implemented.');
    }
    async updateShipperProfile(userId: string, shipperData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteShipper(shipperId: string) {
        throw new Error('Method not implemented.');
    }
}

export default ShipperService;
