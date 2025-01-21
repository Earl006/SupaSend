import prisma from '../../config/Prisma.Config';
import { Address } from '@prisma/client';

class AddressService {
    async getAddressesByBusinessId(userId: string) {
        throw new Error('Method not implemented.');
    }
    async getAddressesByCustomerId(userId: string) {
        throw new Error('Method not implemented.');
    }
    async getAddressesByZoneId(zoneId: string) {
        throw new Error('Method not implemented.');
    }
}

export default AddressService;
