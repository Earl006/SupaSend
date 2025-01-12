import { Request, Response, NextFunction } from 'express';
import { uploadToCloudinary } from '../utils/ImageUpload.Util';
import ShipperService from '../services/Shipper.Service';

class ShipperController {

    private shipperService: ShipperService;

    constructor() {
        this.shipperService = new ShipperService();
    }

    getAllShippers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const shippers = await this.shipperService.getAllShippers();
            res.status(200).json(shippers);
        } catch (error) {
            next(error);
        }
    };

    getShipperById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: shipperId } = req.params;
            const shipper = await this.shipperService.getShipperById(shipperId);
            res.status(200).json(shipper);
        } catch (error) {
            next(error);
        }
    };

    createShipper = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const shipperData = req.body;
            const newShipper = await this.shipperService.createShipper(shipperData);
            res.status(201).json(newShipper);
        } catch (error) {
            next(error);
        }
    };

    updateShipper = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: shipperId } = req.params;
            const shipperData = req.body;
            const updatedShipper = await this.shipperService.updateShipper(shipperId, shipperData);
            res.status(200).json(updatedShipper);
        } catch (error) {
            next(error);
        }
    };

    deleteShipper = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: shipperId } = req.params;
            await this.shipperService.deleteShipper(shipperId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    getShipperProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const shipperProfile = await this.shipperService.getShipperProfile(userId);
            res.status(200).json(shipperProfile);
        } catch (error) {
            next(error);
        }
    };

    updateShipperProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const shipperData = req.body;

            if (req.file) {
                const imageUrl = await uploadToCloudinary(req.file);
                shipperData.profileImage = imageUrl;
            }

            const updatedProfile = await this.shipperService.updateShipperProfile(userId, shipperData);
            res.status(200).json(updatedProfile);
        } catch (error) {
            next(error);
        }
    };

    getShippersByZoneId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { zoneId } = req.params;
            const shippers = await this.shipperService.getShippersByZoneId(zoneId);
            res.status(200).json(shippers);
        } catch (error) {
            next(error);
        }
    };
}

export default new ShipperController();
