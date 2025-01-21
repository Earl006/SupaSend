import { Request, Response, NextFunction } from 'express';
import ZoneService from '../services/Zone.Service';

class ZoneController {

    private zoneService: ZoneService;

    constructor() {
        this.zoneService = new ZoneService();
    }

    getAllZones = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const zones = await this.zoneService.getAllZones();
            res.status(200).json({
                success: true,
                message: 'Zones retrieved successfully.',
                data: zones,
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new ZoneController();
