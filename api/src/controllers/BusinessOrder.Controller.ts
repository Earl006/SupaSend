import { Request, Response, NextFunction } from 'express';
import BusinessOrderService from '../services/BusinessOrder.Service';

class BusinessOrderController {

    private businessOrderService: BusinessOrderService;

    constructor() {
        this.businessOrderService = new BusinessOrderService();
    }

    getAllBusinessOrders = async (req: Request, res: Response, next: NextFunction) => {

    }

    getBusinessOrderById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createBusinessOrder = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateBusinessOrder = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteBusinessOrder = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getBusinessOrdersByOrderId = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    updateBusinessOrderStatus = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new BusinessOrderController();
