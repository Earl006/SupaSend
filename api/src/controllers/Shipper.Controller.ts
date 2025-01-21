import { Request, Response, NextFunction } from 'express';
import ShipperService from '../services/Shipper.Service';

class ShipperController {

    private shipperService: ShipperService;

    constructor() {
        this.shipperService = new ShipperService();
    }

    createShipper = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const shipperData = req.body;
            const newShipper = await this.shipperService.createShipper(shipperData);
            res.status(201).json({
                success: true,
                message: 'Shipper account created successfully.',
                data: newShipper
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new ShipperController();
