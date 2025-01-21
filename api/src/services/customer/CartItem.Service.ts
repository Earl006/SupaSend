import prisma from '../../config/Prisma.Config';
import { CartItem } from '@prisma/client';

class CartItemService {
    async createCartItem(userId: string, cartId: string, cartItemData: any) {
        throw new Error('Method not implemented.');
    }
    async updateCartItem(userId: string, cartItemId: string, cartItemData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteCartItem(userId: string, cartItemId: string) {
        throw new Error('Method not implemented.');
    }
    async getCartItemsByCartId(userId: string, cartId: string) {
        throw new Error('Method not implemented.');
    }
}

export default CartItemService;
