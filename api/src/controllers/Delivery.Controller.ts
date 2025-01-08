import { Request, Response, NextFunction } from 'express';
import DeliveryService from '../services/Delivery.Service';

class DeliveryController {

    private deliveryService: DeliveryService;

    constructor() {
        this.deliveryService = new DeliveryService();
    }

    getAllDeliveries = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getDeliveryById = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    createDelivery = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    updateDelivery = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    deleteDelivery = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    // getDeliveriesByOrder = async (req: Request, res: Response, next: NextFunction) => {
        //         try {

        // } catch (error: unknown) {
        //     next(error);
        // }
    // }

    getDeliveriesByShipper = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getDeliveriesByStatus = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    updateDeliveryStatus = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new DeliveryController();
