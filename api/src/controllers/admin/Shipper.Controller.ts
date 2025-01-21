import { Request, Response, NextFunction } from 'express';
import ShipperService from '../../services/admin/Shipper.Service';

class ShipperController {

    private shipperService: ShipperService;

    constructor() {
        this.shipperService = new ShipperService();
    }

    getAllShippers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const shippers = await this.shipperService.getAllShippers();
            res.status(200).json({
                success: true,
                message: 'Shippers retrieved successfully.',
                data: shippers
            });
        } catch (error) {
            next(error);
        }
    };

    createShipper = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const shipperData = req.body;
            const newShipper = await this.shipperService.createShipper(shipperData);
            res.status(201).json({
                success: true,
                message: 'Shipper created successfully.',
                data: newShipper
            });
        } catch (error) {
            next(error);
        }
    };

    getShipperById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: shipperId } = req.params;
            const shipper = await this.shipperService.getShipperById(shipperId);
            res.status(200).json({
                success: true,
                message: 'Shipper details retrieved successfully.',
                data: shipper
            });
        } catch (error) {
            next(error);
        }
    };

    updateShipper = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: shipperId } = req.params;
            const shipperData = req.body;
            const updatedShipper = await this.shipperService.updateShipper(shipperId, shipperData);
            res.status(200).json({
                success: true,
                message: 'Shipper updated successfully.',
                data: updatedShipper
            });
        } catch (error) {
            next(error);
        }
    };

    deleteShipper = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: shipperId } = req.params;
            await this.shipperService.deleteShipper(shipperId);
            res.status(200).json({
                success: true,
                message: 'Shipper deleted successfully.'
            });
        } catch (error) {
            next(error);
        }
    };

    getShippersByZoneId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { zoneId } = req.params;
            const shippers = await this.shipperService.getShippersByZoneId(zoneId);
            res.status(200).json({
                success: true,
                message: 'Zone shippers retrieved successfully.',
                data: shippers
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new ShipperController();
