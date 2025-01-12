import prisma from '../config/Prisma.Config';
import { User } from '@prisma/client';

class UserService {
    async getAllUsers() {
        throw new Error('Method not implemented.');
    }
    async getUserById(userId: string) {
        throw new Error('Method not implemented.');
    }
    async createUser(body: any) {
        throw new Error('Method not implemented.');
    }
    async updateUser(userId: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async deleteUser(userId: string) {
        throw new Error('Method not implemented.');
    }
    async getUsersByRole(role: string) {
        throw new Error('Method not implemented.');
    }

}

export default UserService;
