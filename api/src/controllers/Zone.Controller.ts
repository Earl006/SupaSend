import { Request, Response, NextFunction } from 'express';
import ZoneService from '../services/Zone.Service';

class ZoneController {

    private zoneService: ZoneService;

    constructor() {
        this.zoneService = new ZoneService();
    }

    getAllZones = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const zones = await this.zoneService.getAllZones();
            res.status(200).json(zones);
        } catch (error: unknown) {
            next(error);
        }
    }

    getZoneById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const zoneId = req.params.id;
            const zone = await this.zoneService.getZoneById(zoneId);
            res.status(200).json(zone);
        } catch (error: unknown) {
            next(error);
        }
    }

    createZone = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newZone = await this.zoneService.createZone(req.body);
            res.status(201).json(newZone);
        } catch (error: unknown) {
            next(error);
        }
    }

    updateZone = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const zoneId = req.params.id;
            const updatedZone = await this.zoneService.updateZone(zoneId, req.body);
            res.status(200).json(updatedZone);
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteZone = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const zoneId = req.params.id;
            await this.zoneService.deleteZone(zoneId);
            res.status(204).send();
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new ZoneController();
