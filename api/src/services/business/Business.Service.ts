import prisma from '../../config/Prisma.Config';
import { Business } from '@prisma/client';

class BusinessService {
    async getBusinessOwnerProfile(userId: string) {
        throw new Error('Method not implemented.');
    }
    async updateBusinessOwnerProfile(userId: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async deleteBusinessAccount(userId: string) {
        throw new Error('Method not implemented.');
    }
    async getAllBusinesss(userId: string) {
        throw new Error('Method not implemented.');
    }
    async createBusiness(userId: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async getBusinessById(userId: string, businessId: string) {
        throw new Error('Method not implemented.');
    }
    async updateBusiness(userId: string, businessId: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async deleteBusiness(userId: string, businessId: string) {
        throw new Error('Method not implemented.');
    }
}

export default BusinessService;
