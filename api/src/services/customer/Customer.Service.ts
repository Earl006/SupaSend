import prisma from '../../config/Prisma.Config';
import { Customer } from '@prisma/client';

class CustomerService {
    async getCustomerProfile(userId: string) {
        throw new Error('Method not implemented.');
    }
    async updateCustomerProfile(userId: string, customerData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteCustomerAccount(userId: string) {
        throw new Error('Method not implemented.');
    }
}

export default CustomerService;
