import { Request, Response, NextFunction } from 'express';
import ZoneService from '../services/Zone.Service';

class ZoneController {

    private zoneService: ZoneService;

    constructor() {
        this.zoneService = new ZoneService();
    }

    getAllZones = async (req: Request, res: Response, next: NextFunction) => {

    }

    getZoneById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createZone = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateZone = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteZone = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new ZoneController();
