import { Request, Response, NextFunction } from 'express';
import CartItemService from '../services/CartItem.Service';

class CartItemController {

    private cartItemService: CartItemService;

    constructor() {
        this.cartItemService = new CartItemService();
    }

    getAllCartItems = async (req: Request, res: Response, next: NextFunction) => {

    }

    getCartItemById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createCartItem = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateCartItem = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteCartItem = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getCartItemsByCartId = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new CartItemController();
