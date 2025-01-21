import { Request, Response, NextFunction } from 'express';
import CartService from '../../services/admin/Cart.Service';

class CartController {

    private cartService: CartService;

    constructor() {
        this.cartService = new CartService();
    }

    getCartsByCustomerId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { customerId } = req.params;
            const carts = await this.cartService.getCartsByCustomerId(customerId);
            res.status(200).json({
                success: true,
                message: 'Customer carts retrieved successfully.',
                data: carts,
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new CartController();
