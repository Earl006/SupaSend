import prisma from '../../config/Prisma.Config';
import { Business } from '@prisma/client';

class BusinessService {
    async getAllBusinesss() {
        throw new Error('Method not implemented.');
    }
    async createBusiness(body: any) {
        throw new Error('Method not implemented.');
    }
    async getBusinessById(businessId: string) {
        throw new Error('Method not implemented.');
    }
    async updateBusiness(businessId: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async deleteBusiness(businessId: string) {
        throw new Error('Method not implemented.');
    }
    async getBusinessesByOwnerId(ownerId: string) {
        throw new Error('Method not implemented.');
    }
}

export default BusinessService;
