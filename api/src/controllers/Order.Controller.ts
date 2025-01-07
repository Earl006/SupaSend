import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/Order.Service';

class OrderController {

    private orderService: OrderService;

    constructor() {
        this.orderService = new OrderService();
    }

    getAllOrders = async (req: Request, res: Response, next: NextFunction) => {

    }

    getOrderById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createOrder = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateOrder = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getOrdersByCustomerId = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getOrdersByStatus = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    updateOrderStatus = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    checkoutOrder = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new OrderController();
