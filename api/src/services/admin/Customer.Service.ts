import prisma from '../../config/Prisma.Config';
import { Customer } from '@prisma/client';

class CustomerService {
    async getAllCustomers() {
        throw new Error('Method not implemented.');
    }
    async createCustomer(customerData: any) {
        throw new Error('Method not implemented.');
    }
    async getCustomerById(customerId: string) {
        throw new Error('Method not implemented.');
    }
    async updateCustomer(customerId: string, customerData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteCustomer(customerId: string) {
        throw new Error('Method not implemented.');
    }
}

export default CustomerService;
