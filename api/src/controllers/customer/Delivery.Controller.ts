import { Request, Response, NextFunction } from 'express';
import DeliveryService from '../../services/customer/Delivery.Service';

class DeliveryController {

    private deliveryService: DeliveryService;

    constructor() {
        this.deliveryService = new DeliveryService();
    }

    resendDeliveryCode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: deliveryId } = req.params;
            await this.deliveryService.resendDeliveryCode(userId, deliveryId);
            res.status(200).json({
                success: true,
                message: 'Delivery code resend successfully.',
            });
        } catch (error) {
            next(error);
        }
    };

    getDeliveriesByOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { orderId } = req.params;
            const deliveries = await this.deliveryService.getDeliveriesByOrder(userId, orderId);
            res.status(200).json({
                success: true,
                message: 'Order deliveries retrieved successfully.',
                data: deliveries,
            });
        } catch (error) {
            next(error);
        }
    };

    getDeliveryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: deliveryId } = req.params;
            const delivery = await this.deliveryService.getDeliveryById(userId, deliveryId);
            res.status(200).json({
                success: true,
                message: 'Delivery details retrieved successfully.',
                data: delivery,
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new DeliveryController();
