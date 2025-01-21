import prisma from '../../config/Prisma.Config';
import { Address } from '@prisma/client';

class AddressService {
    async getAllAddresses(userId: string) {
        throw new Error('Method not implemented.');
    }
    async createAddress(userId: any, addressData: any) {
        throw new Error('Method not implemented.');
    }
    async getAddressById(userId: string, addressId: string) {
        throw new Error('Method not implemented.');
    }
    async updateAddress(userId: string, addressId: string, addressData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteAddress(userId: string, addressId: string) {
        throw new Error('Method not implemented.');
    }
}

export default AddressService;
