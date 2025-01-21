import prisma from '../config/Prisma.Config';
import { Address } from '@prisma/client';

class AddressService {
    async getAddressesByBusinessId(businessId: string) {
        throw new Error('Method not implemented.');
    }
}

export default AddressService;
