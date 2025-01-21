import prisma from '../../config/Prisma.Config';
import { Product } from '@prisma/client';

class ProductService {
    async getAllProducts(userId: string) {
        throw new Error('Method not implemented.');
    }
    async createProduct(userId: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async getProductById(userId: string, productId: string) {
        throw new Error('Method not implemented.');
    }
    async updateProduct(userId: string, productId: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async deleteProduct(userId: string, productId: string) {
        throw new Error('Method not implemented.');
    }
}

export default ProductService;
