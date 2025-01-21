import prisma from '../../config/Prisma.Config';
import { Cart } from '@prisma/client';

class CartService {
    async getAllCarts(userId: string) {
        throw new Error('Method not implemented.');
    }
    async createCart(userId: string) {
        throw new Error('Method not implemented.');
    }
    async createOrderFromCart(userId: string, cartId: string) {
        throw new Error('Method not implemented.');
    }
    async deleteCart(userId: string, cartId: string) {
        throw new Error('Method not implemented.');
    }
}

export default CartService;
