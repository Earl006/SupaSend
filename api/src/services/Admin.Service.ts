import prisma from '../config/Prisma.Config';
import { Admin } from '@prisma/client';

class AdminService {
    async getAllAdmins() {
        throw new Error('Method not implemented.');
    }
    async getAdminById(id: string) {
        throw new Error('Method not implemented.');
    }
    async createAdmin(userId: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async updateAdmin(userId: string, id: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async deleteAdmin(userId: string, id: string) {
        throw new Error('Method not implemented.');
    }
    async getAdminProfile(userId: string) {
        throw new Error('Method not implemented.');
    }
    async updateAdminProfile(userId: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async getAdminsByLevel(level: string) {
        throw new Error('Method not implemented.');
    }
}

export default AdminService;
