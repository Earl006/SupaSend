import prisma from '../config/Prisma.Config';
import { CartItem } from '@prisma/client';

class CartItemService {
    async getAllCartItems() {
        throw new Error('Method not implemented.');
    }
    async getCartItemById(cartItemId: string) {
        throw new Error('Method not implemented.');
    }
    async createCartItem(cartId: string, cartItemData: any) {
        throw new Error('Method not implemented.');
    }
    async updateCartItem(cartItemId: string, cartItemData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteCartItem(cartItemId: string) {
        throw new Error('Method not implemented.');
    }
    async getCartItemsByCartId(cartId: string) {
        throw new Error('Method not implemented.');
    }
}

export default CartItemService;
