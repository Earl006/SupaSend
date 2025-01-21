import prisma from '../config/Prisma.Config';
import { Product } from '@prisma/client';

class ProductService {
    async getAllProducts() {
        throw new Error('Method not implemented.');
    }
    async getProductById(productId: string) {
        throw new Error('Method not implemented.');
    }
    async getProductsByBusinessId(businessId: string) {
        throw new Error('Method not implemented.');
    }
    async getProductsByCategoryId(categoryId: string) {
        throw new Error('Method not implemented.');
    }
}

export default ProductService;
