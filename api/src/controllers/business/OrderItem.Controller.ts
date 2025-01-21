import { Request, Response, NextFunction } from 'express';
import OrderItemService from '../../services/business/OrderItem.Service';

class OrderItemController {

    private orderItemService: OrderItemService;

    constructor() {
        this.orderItemService = new OrderItemService();
    }

    getOrderItemsByBusinessOrderId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { businessOrderId } = req.params;
            const orderItems = await this.orderItemService.getOrderItemsByBusinessOrderId(userId, businessOrderId);
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
