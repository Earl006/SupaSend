import { Request, Response, NextFunction } from 'express';
import CartItemService from '../services/CartItem.Service';

class CartItemController {
    
    private cartItemService: CartItemService;

    constructor() {
        this.cartItemService = new CartItemService();
    }

    getAllCartItems = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const cartItems = await this.cartItemService.getAllCartItems();
            res.status(200).json(cartItems);
        } catch (error) {
            next(error);
        }
    };

    getCartItemById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: cartItemId } = req.params;
            const cartItem = await this.cartItemService.getCartItemById(cartItemId);
            res.status(200).json(cartItem);
        } catch (error) {
            next(error);
        }
    };

    createCartItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { cartId } = req.params;
            const cartItemData = req.body;
            const newCartItem = await this.cartItemService.createCartItem(cartId, cartItemData);
            res.status(201).json(newCartItem);
        } catch (error) {
            next(error);
        }
    };

    updateCartItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: cartItemId } = req.params;
            const cartItemData = req.body;
            const updatedCartItem = await this.cartItemService.updateCartItem(cartItemId, cartItemData);
            res.status(200).json(updatedCartItem);
        } catch (error) {
            next(error);
        }
    };

    deleteCartItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: cartItemId } = req.params;
            await this.cartItemService.deleteCartItem(cartItemId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    getCartItemsByCartId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { cartId } = req.params;
            const cartItems = await this.cartItemService.getCartItemsByCartId(cartId);
            res.status(200).json(cartItems);
        } catch (error) {
            next(error);
        }
    };
}

export default new CartItemController();
