import { Request, Response, NextFunction } from 'express';
import DeliveryService from '../services/Delivery.Service';

class DeliveryController {

    private deliveryService: DeliveryService;

    constructor() {
        this.deliveryService = new DeliveryService();
    }

    getAllDeliveries = async (req: Request, res: Response, next: NextFunction) => {

    }

    getDeliveryById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createDelivery = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateDelivery = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteDelivery = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    // getDeliveriesByOrder = async (req: Request, res: Response, next: NextFunction) => {
        
    // }

    getDeliveriesByShipper = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getDeliveriesByStatus = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    updateDeliveryStatus = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new DeliveryController();
