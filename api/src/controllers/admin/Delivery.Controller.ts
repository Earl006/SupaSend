import { Request, Response, NextFunction } from 'express';
import DeliveryService from '../../services/admin/Delivery.Service';

class DeliveryController {

    private deliveryService: DeliveryService;

    constructor() {
        this.deliveryService = new DeliveryService();
    }

    getDeliveriesByShipperId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { shipperId } = req.params;
            const deliveries = await this.deliveryService.getDeliveriesByShipperId(shipperId);
            res.status(200).json({
                success: true,
                message: 'Shipper deliveries retrieved successfully.',
                data: deliveries,
            });
        } catch (error) {
            next(error);
        }
    };

    getDeliveriesByOrderId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { orderId } = req.params;
            const deliveries = await this.deliveryService.getDeliveriesByOrderId(orderId);
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
            const { id: deliveryId } = req.params;
            const delivery = await this.deliveryService.getDeliveryById(deliveryId);
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
