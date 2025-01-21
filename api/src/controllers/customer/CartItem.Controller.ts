import { Request, Response, NextFunction } from 'express';
import CartItemService from '../../services/customer/CartItem.Service';

class CartItemController {

    private cartItemService: CartItemService;

    constructor() {
        this.cartItemService = new CartItemService();
    }

    createCartItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { cartId } = req.params;
            const cartItemData = req.body;
            const newCartItem = await this.cartItemService.createCartItem(userId, cartId, cartItemData);
            res.status(201).json({
                success: true,
                message: 'Cart item created successfully.',
                data: newCartItem,
            });
        } catch (error) {
            next(error);
        }
    };

    updateCartItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: cartItemId } = req.params;
            const cartItemData = req.body;
            const updatedCartItem = await this.cartItemService.updateCartItem(userId, cartItemId, cartItemData);
            res.status(200).json({
                success: true,
                message: 'Cart item updated successfully.',
                data: updatedCartItem,
            });
        } catch (error) {
            next(error);
        }
    };

    deleteCartItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: cartItemId } = req.params;
            await this.cartItemService.deleteCartItem(userId, cartItemId);
            res.status(200).json({
                success: true,
                message: 'Cart item deleted successfully.',
            });
        } catch (error) {
            next(error);
        }
    };

    getCartItemsByCartId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { cartId } = req.params;
            const cartItems = await this.cartItemService.getCartItemsByCartId(userId, cartId);
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
