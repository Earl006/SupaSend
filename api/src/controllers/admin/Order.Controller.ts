import { Request, Response, NextFunction } from 'express';
import OrderService from '../../services/admin/Order.Service';

class OrderController {

    private orderService: OrderService;

    constructor() {
        this.orderService = new OrderService();
    }

    getOrdersByCustomerId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { customerId } = req.params;
            const orders = await this.orderService.getOrdersByCustomerId(customerId);
            res.status(200).json({
                success: true,
                message: 'Customer orders retrieved successfully.',
                data: orders
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new OrderController();
