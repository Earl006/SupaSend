import { Request, Response, NextFunction } from 'express';
import BusinessOrderService from '../services/BusinessOrder.Service';

class BusinessOrderController {

    private businessOrderService: BusinessOrderService;

    constructor() {
        this.businessOrderService = new BusinessOrderService();
    }

    getAllBusinessOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const businessOrders = await this.businessOrderService.getAllBusinessOrders();
            res.status(200).json(businessOrders);
        } catch (error) {
            next(error);
        }
    };

    getBusinessOrderById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: businessOrderId } = req.params;
            const businessOrder = await this.businessOrderService.getBusinessOrderById(businessOrderId);
            res.status(200).json(businessOrder);
        } catch (error) {
            next(error);
        }
    };

    // createBusinessOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { orderId } = req.params;
    //         const newBusinessOrder = await this.businessOrderService.createBusinessOrder(orderId);
    //         res.status(201).json(newBusinessOrder);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // updateBusinessOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { id: businessOrderId } = req.params;
    //         const businessOrderData = req.body;
    //         const updatedBusinessOrder = await this.businessOrderService.updateBusinessOrder(businessOrderId, businessOrderData);
    //         res.status(200).json(updatedBusinessOrder);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    deleteBusinessOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: businessOrderId } = req.params;
            await this.businessOrderService.deleteBusinessOrder(businessOrderId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    getBusinessOrdersByOrderId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { orderId } = req.params;
            const businessOrders = await this.businessOrderService.getBusinessOrdersByOrderId(orderId);
            res.status(200).json(businessOrders);
        } catch (error) {
            next(error);
        }
    };

    getBusinessOrdersByStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { status } = req.query;
            const businessOrders = await this.businessOrderService.getBusinessOrdersByStatus(status as string);
            res.status(200).json(businessOrders);
        } catch (error) {
            next(error);
        }
    };

    updateBusinessOrderStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { businessOrderId } = req.params;
            const { status } = req.body;
            const updatedStatus = await this.businessOrderService.updateBusinessOrderStatus(businessOrderId, status);
            res.status(200).json(updatedStatus);
        } catch (error) {
            next(error);
        }
    };
}

export default new BusinessOrderController();
