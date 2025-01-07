import { Request, Response, NextFunction } from 'express';
import ShipperService from '../services/Shipper.Service';

class ShipperController {

    private shipperService: ShipperService;

    constructor() {
        this.shipperService = new ShipperService();
    }

    getAllShippers = async (req: Request, res: Response, next: NextFunction) => {

    }

    getShipperById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createShipper = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateShipper = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteShipper = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getShipperProfile = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    updateShipperProfile = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getShippersByZoneId = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new ShipperController();
