import { Request, Response, NextFunction } from 'express';
import OrderService from '../../services/customer/Order.Service';

class OrderController {

    private orderService: OrderService;

    constructor() {
        this.orderService = new OrderService();
    }

    getAllOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const orders = await this.orderService.getAllOrders(userId);
            res.status(200).json({
                success: true,
                message: 'Orders retrieved successfully.',
                data: orders
            });
        } catch (error) {
            next(error);
        }
    };
    
    getOrdersByStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { status } = req.query;
            const orders = await this.orderService.getOrdersByStatus(userId, status as string);
            res.status(200).json({
                success: true,
                message: `${status} orders retrieved successfully.`,
                data: orders
            });
        } catch (error) {
            next(error);
        }
    };

    checkoutOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: orderId } = req.params;
            const checkoutDetails = req.body;
            const checkedOutOrder = await this.orderService.checkoutOrder(userId, orderId, checkoutDetails);
            res.status(200).json({
                success: true,
                message: 'Order checked out successfully.',
                data: checkedOutOrder
            });
        } catch (error) {
            next(error);
        }
    };

    deleteOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: orderId } = req.params;
            await this.orderService.deleteOrder(userId, orderId);
            res.status(200).json({
                success: true,
                message: 'Order deleted successfully.'
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new OrderController();
