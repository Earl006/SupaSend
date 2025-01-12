import prisma from '../config/Prisma.Config';
import { Cart } from '@prisma/client';

class CartService {
    async getAllCarts() {
        throw new Error('Method not implemented.');
    }
    async getCartById(cartId: string) {
        throw new Error('Method not implemented.');
    }
    async createCart(userId: string, cartData: any) {
        throw new Error('Method not implemented.');
    }
    async updateCart(cartId: string, cartData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteCart(cartId: string) {
        throw new Error('Method not implemented.');
    }
    async getCartsByCustomerId(customerId: string) {
        throw new Error('Method not implemented.');
    }
    async createOrderFromCart(cartId: string) {
        throw new Error('Method not implemented.');
    }
}

export default CartService;
