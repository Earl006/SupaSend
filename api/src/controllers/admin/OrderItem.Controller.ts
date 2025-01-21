import { Request, Response, NextFunction } from 'express';
import OrderItemService from '../../services/admin/OrderItem.Service';

class OrderItemController {

    private orderItemService: OrderItemService;

    constructor() {
        this.orderItemService = new OrderItemService();
    }

    getOrderItemsByOrderId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { orderId } = req.params;
            const orderItems = await this.orderItemService.getOrderItemsByOrderId(orderId);
            res.status(200).json({
                success: true,
                message: 'Order items retrieved successfully.',
                data: orderItems
            });
        } catch (error) {
            next(error);
        }
    };

    getOrderItemsByBusinessOrderId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { businessOrderId } = req.params;
            const orderItems = await this.orderItemService.getOrderItemsByBusinessOrderId(businessOrderId);
            res.status(200).json({
                success: true,
                message: 'Business order items retrieved successfully.',
                data: orderItems
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new OrderItemController();
