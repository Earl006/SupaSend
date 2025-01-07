import { Request, Response, NextFunction } from 'express';
import OrderItemService from '../services/OrderItem.Service';

class OrderItemController {

    private orderItemService: OrderItemService;

    constructor() {
        this.orderItemService = new OrderItemService();
    }

    getAllOrderItems = async (req: Request, res: Response, next: NextFunction) => {

    }

    getOrderItemById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createOrderItem = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateOrderItem = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteOrderItem = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getOrderItemsByOrderId = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getOrderItemsForBusiness = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new OrderItemController();
