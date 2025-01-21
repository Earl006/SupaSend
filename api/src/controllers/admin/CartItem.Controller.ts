import { Request, Response, NextFunction } from 'express';
import CartItemService from '../../services/admin/CartItem.Service';

class CartItemController {

    private cartItemService: CartItemService;

    constructor() {
        this.cartItemService = new CartItemService();
    }

    getCartItemsByCartId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { cartId } = req.params;
            const cartItems = await this.cartItemService.getCartItemsByCartId(cartId);
            res.status(200).json({
                success: true,
                message: 'Cart items retrieved successfully.',
                data: cartItems,
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new CartItemController();
