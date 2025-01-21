import prisma from '../../config/Prisma.Config';
import { BusinessOrder } from '@prisma/client';

class BusinessOrderService {
    async getBusinessOrdersByBusinessId(businessId: string) {
        throw new Error('Method not implemented.');
    }
}

export default BusinessOrderService;
