import { Request, Response, NextFunction } from 'express';
import OrderItemService from '../../services/customer/OrderItem.Service';

class OrderItemController {

    private orderItemService: OrderItemService;

    constructor() {
        this.orderItemService = new OrderItemService();
    }

    getOrderItemsByOrderId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { orderId } = req.params;
            const orderItems = await this.orderItemService.getOrderItemsByOrderId(userId, orderId);
            res.status(200).json({
                success: true,
                message: 'Order items retrieved successfully.',
                data: orderItems
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new OrderItemController();
