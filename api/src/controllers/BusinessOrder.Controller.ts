import { Request, Response, NextFunction } from 'express';
import BusinessOrderService from '../services/BusinessOrder.Service';

class BusinessOrderController {

    private businessOrderService: BusinessOrderService;

    constructor() {
        this.businessOrderService = new BusinessOrderService();
    }

    getAllBusinessOrders = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getBusinessOrderById = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    createBusinessOrder = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    updateBusinessOrder = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    deleteBusinessOrder = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getBusinessOrdersByOrderId = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    updateBusinessOrderStatus = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new BusinessOrderController();
