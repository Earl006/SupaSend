import { Request, Response, NextFunction } from 'express';
import CartService from '../../services/customer/Cart.Service';

class CartController {

    private cartService: CartService;

    constructor() {
        this.cartService = new CartService();
    }

    getAllCarts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const carts = await this.cartService.getAllCarts(userId);
            res.status(200).json({
                success: true,
                message: 'Carts retrieved successfully.',
                data: carts,
            });
        } catch (error) {
            next(error);
        }
    };

    createCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const newCart = await this.cartService.createCart(userId);
            res.status(201).json({
                success: true,
                message: 'Cart created successfully.',
                data: newCart,
            });
        } catch (error) {
            next(error);
        }
    };

    createOrderFromCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: cartId } = req.params;
            const orderData = await this.cartService.createOrderFromCart(userId, cartId);
            res.status(201).json({
                success: true,
                message: 'Order created successfully from the cart.',
                data: orderData,
            });
        } catch (error) {
            next(error);
        }
    };

    deleteCart = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: cartId } = req.params;
            await this.cartService.deleteCart(userId, cartId);
            res.status(200).json({
                success: true,
                message: 'Cart deleted successfully.',
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new CartController();
