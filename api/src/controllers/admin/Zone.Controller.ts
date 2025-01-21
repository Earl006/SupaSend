import { Request, Response, NextFunction } from 'express';
import ZoneService from '../../services/admin/Zone.Service';

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

    createZone = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const zoneData = req.body;
            const newZone = await this.zoneService.createZone(zoneData);
            res.status(201).json({
                success: true,
                message: 'Zone created successfully.',
                data: newZone,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getZoneById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: zoneId } = req.params;
            const zone = await this.zoneService.getZoneById(zoneId);
            res.status(200).json({
                success: true,
                message: `Zone details retrieved successfully.`,
                data: zone,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    updateZone = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: zoneId } = req.params;
            const zoneData = req.body;
            const updatedZone = await this.zoneService.updateZone(zoneId, zoneData);
            res.status(200).json({
                success: true,
                message: `Zone updated successfully.`,
                data: updatedZone,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteZone = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: zoneId } = req.params;
            await this.zoneService.deleteZone(zoneId);
            res.status(200).json({
                success: true,
                message: `Zone deleted successfully.`,
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new ZoneController();
