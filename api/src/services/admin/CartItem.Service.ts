import prisma from '../../config/Prisma.Config';
import { CartItem } from '@prisma/client';

class CartItemService {
    async getCartItemsByCartId(cartId: string) {
        throw new Error('Method not implemented.');
    }
}

export default CartItemService;
