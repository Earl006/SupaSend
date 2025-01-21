import { Request, Response, NextFunction } from 'express';
import BusinessOrderService from '../../services/business/BusinessOrder.Service';

class BusinessOrderController {
    private businessOrderService: BusinessOrderService;

    constructor() {
        this.businessOrderService = new BusinessOrderService();
    }

    getAllBusinessOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const businessOrders = await this.businessOrderService.getAllBusinessOrders(userId);
            res.status(200).json({
                success: true,
                message: 'Business orders retrieved successfully.',
                data: businessOrders,
            });
        } catch (error) {
            next(error);
        }
    };

    getBusinessOrdersByStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { status } = req.query;
            const businessOrders = await this.businessOrderService.getBusinessOrdersByStatus(userId, status as string);
            res.status(200).json({
                success: true,
                message: `${status} business orders retrieved successfully.`,
                data: businessOrders,
            });
        } catch (error) {
            next(error);
        }
    };

    acceptOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: businessOrderId } = req.params;
            await this.businessOrderService.acceptOrder(userId, businessOrderId);
            res.status(200).json({
                success: true,
                message: 'Business order accepted successfully.',
            });
        } catch (error) {
            next(error);
        }
    };

    declineOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: businessOrderId } = req.params;
            await this.businessOrderService.declineOrder(userId, businessOrderId);
            res.status(200).json({
                success: true,
                message: 'Business order declined successfully.',
            });
        } catch (error) {
            next(error);
        }
    };

    requestPickup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: businessOrderId } = req.params;
            await this.businessOrderService.requestPickup(userId, businessOrderId);
            res.status(200).json({
                success: true,
                message: 'Pickup request made successfully.',
            });
        } catch (error) {
            next(error);
        }
    };

    deleteBusinessOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: businessOrderId } = req.params;
            await this.businessOrderService.deleteBusinessOrder(userId, businessOrderId);
            res.status(200).json({
                success: true,
                message: 'Business order deleted successfully.',
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new BusinessOrderController();
