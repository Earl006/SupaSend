import { Request, Response, NextFunction } from 'express';
import CartService from '../services/Cart.Service';

class CartController {
    
    private cartService: CartService;

    constructor() {
        this.cartService = new CartService();
    }

    getAllCarts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const carts = await this.cartService.getAllCarts();
            res.status(200).json(carts);
        } catch (error) {
            next(error);
        }
    };

    getCartById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: cartId } = req.params;
            const cart = await this.cartService.getCartById(cartId);
            res.status(200).json(cart);
        } catch (error) {
            next(error);
        }
    };

    createCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const cartData = req.body;
            const newCart = await this.cartService.createCart(userId, cartData);
            res.status(201).json(newCart);
        } catch (error) {
            next(error);
        }
    };

    updateCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: cartId } = req.params;
            const cartData = req.body;
            const updatedCart = await this.cartService.updateCart(cartId, cartData);
            res.status(200).json(updatedCart);
        } catch (error) {
            next(error);
        }
    };

    deleteCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: cartId } = req.params;
            await this.cartService.deleteCart(cartId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    getCartsByCustomerId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { customerId } = req.params;
            const carts = await this.cartService.getCartsByCustomerId(customerId);
            res.status(200).json(carts);
        } catch (error) {
            next(error);
        }
    };

    createOrderFromCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: cartId } = req.params;
            const orderData = await this.cartService.createOrderFromCart(cartId);
            res.status(201).json(orderData);
        } catch (error) {
            next(error);
        }
    };
}

export default new CartController();
