import { Request, Response, NextFunction } from 'express';
import BusinessService from '../services/Business.Service';

class BusinessController {

    private businessService: BusinessService;

    constructor() {
        this.businessService = new BusinessService();
    }

    getAllBusinesses = async (req: Request, res: Response, next: NextFunction) => {

    }

    getBusinessById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createBusiness = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateBusiness = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteBusiness = async (req: Request, res: Response, next: NextFunction) => {
        
    }
    
    getBusinessesByOwnerId = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getBusinessProfile = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    updateBusinessProfile = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new BusinessController();
