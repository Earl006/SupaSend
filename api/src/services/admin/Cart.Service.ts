import prisma from '../../config/Prisma.Config';
import { Cart } from '@prisma/client';

class CartService {
    async getCartsByCustomerId(customerId: string) {
        throw new Error('Method not implemented.');
    }
}

export default CartService;
