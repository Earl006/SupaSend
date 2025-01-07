import { Request, Response, NextFunction } from 'express';
import CartService from '../services/Cart.Service';

class CartController {

    private cartService: CartService;

    constructor() {
        this.cartService = new CartService();
    }

    getAllCarts = async (req: Request, res: Response, next: NextFunction) => {

    }

    getCartById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createCart = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateCart = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteCart = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getCartsByCustomerId = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    createOrderFromCart = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new CartController();
