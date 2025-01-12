import prisma from '../config/Prisma.Config';
import { Address } from '@prisma/client';

class AddressService {
    async getAllAddresses() {
        throw new Error('Method not implemented.');
    }
    async getAddressById(id: string) {
        throw new Error('Method not implemented.');
    }
    async createAddress(body: any) {
        throw new Error('Method not implemented.');
    }
    async updateAddress(id: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async deleteAddress(id: string) {
        throw new Error('Method not implemented.');
    }
    async getAddressesByUserId(userId: string) {
        throw new Error('Method not implemented.');
    }
    async getAddressesByZoneId(zoneId: string) {
        throw new Error('Method not implemented.');
    }
}

export default AddressService;
