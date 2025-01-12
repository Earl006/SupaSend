import prisma from '../config/Prisma.Config';
import { Business } from '@prisma/client';

class BusinessService {
    async requestBusinessAccount(userId: string) {
        throw new Error('Method not implemented.');
    }
    async approveBusinessAccount(userId: string, businessId: string) {
        throw new Error('Method not implemented.');
    }
    async getBusinessesByOwnerId(ownerId: string) {
        throw new Error('Method not implemented.');
    }
    async getAllBusinesss() {
        throw new Error('Method not implemented.');
    }
    async getBusinessById(businessId: string) {
        throw new Error('Method not implemented.');
    }
    async createBusiness(userId: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async updateBusiness(businessId: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async deleteBusiness(businessId: string) {
        throw new Error('Method not implemented.');
    }
    async getBusinessProfile(userId: string, businessId: string) {
        throw new Error('Method not implemented.');
    }
    async updateBusinessProfile(userId: string, businessId: string, body: any) {
        throw new Error('Method not implemented.');
    }
}

export default BusinessService;
