import { Request, Response, NextFunction } from 'express';
import DeliveryService from '../../services/shipper/Delivery.Service';

class DeliveryController {

    private deliveryService: DeliveryService;

    constructor() {
        this.deliveryService = new DeliveryService();
    }

    getAllDeliveries = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const deliveries = await this.deliveryService.getAllDeliveries(userId);
            res.status(200).json({
                success: true,
                message: 'Deliveries retrieved successfully.',
                data: deliveries,
            });
        } catch (error) {
            next(error);
        }
    };

    getDeliveriesByStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { status } = req.query;
            const deliveries = await this.deliveryService.getDeliveriesByStatus(userId, status as string);
            res.status(200).json({
                success: true,
                message: `${status} deliveries retrieved successfully.`,
                data: deliveries,
            });
        } catch (error) {
            next(error);
        }
    };

    confirmDelivery = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: deliveryId } = req.params;
            await this.deliveryService.confirmDelivery(userId, deliveryId);
            res.status(200).json({
                success: true,
                message: 'Delivery confirmed successfully.',
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

    deleteDelivery = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: deliveryId } = req.params;
            await this.deliveryService.deleteDelivery(userId, deliveryId);
            res.status(200).json({
                success: true,
                message: 'Delivery deleted successfully.',
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new DeliveryController();
