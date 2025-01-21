import { Request, Response, NextFunction } from 'express';
import { uploadToCloudinary } from '../../utils/ImageUpload.Util';
import ShipperService from '../../services/shipper/Shipper.Service';

class ShipperController {

    private shipperService: ShipperService;

    constructor() {
        this.shipperService = new ShipperService();
    }

    getShipperProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const shipperProfile = await this.shipperService.getShipperProfile(userId);
            res.status(200).json({
                success: true,
                message: 'Shipper profile retrieved successfully.',
                data: shipperProfile
            });
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
            res.status(200).json({
                success: true,
                message: 'Shipper profile updated successfully.',
                data: updatedProfile
            });
        } catch (error) {
            next(error);
        }
    };

    deleteShipper = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            await this.shipperService.deleteShipper(userId);
            res.status(200).json({
                success: true,
                message: 'Account deleted successfully.'
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new ShipperController();
