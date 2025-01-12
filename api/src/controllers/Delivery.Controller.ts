import { Request, Response, NextFunction } from 'express';
import DeliveryService from '../services/Delivery.Service';

class DeliveryController {

    private deliveryService: DeliveryService;

    constructor() {
        this.deliveryService = new DeliveryService();
    }

    getAllDeliveries = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const deliveries = await this.deliveryService.getAllDeliveries();
            res.status(200).json(deliveries);
        } catch (error) {
            next(error);
        }
    };

    getDeliveryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: deliveryId } = req.params;
            const delivery = await this.deliveryService.getDeliveryById(deliveryId);
            res.status(200).json(delivery);
        } catch (error) {
            next(error);
        }
    };

    createDelivery = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const deliveryData = req.body;
            const newDelivery = await this.deliveryService.createDelivery(deliveryData);
            res.status(201).json(newDelivery);
        } catch (error) {
            next(error);
        }
    };

    updateDelivery = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: deliveryId } = req.params;
            const deliveryData = req.body;
            const updatedDelivery = await this.deliveryService.updateDelivery(deliveryId, deliveryData);
            res.status(200).json(updatedDelivery);
        } catch (error) {
            next(error);
        }
    };

    deleteDelivery = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: deliveryId } = req.params;
            await this.deliveryService.deleteDelivery(deliveryId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    getDeliveriesByOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { orderId } = req.params;
            const deliveries = await this.deliveryService.getDeliveriesByOrder(orderId);
            res.status(200).json(deliveries);
        } catch (error) {
            next(error);
        }
    };

    getDeliveriesByShipper = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { shipperId } = req.params;
            const deliveries = await this.deliveryService.getDeliveriesByShipper(shipperId);
            res.status(200).json(deliveries);
        } catch (error) {
            next(error);
        }
    };

    getDeliveriesByStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { status } = req.query;
            const deliveries = await this.deliveryService.getDeliveriesByStatus(status as string);
            res.status(200).json(deliveries);
        } catch (error) {
            next(error);
        }
    };

    updateDeliveryStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: deliveryId } = req.params;
            const { status } = req.body;
            const updatedDelivery = await this.deliveryService.updateDeliveryStatus(deliveryId, status);
            res.status(200).json(updatedDelivery);
        } catch (error) {
            next(error);
        }
    };
}

export default new DeliveryController();
