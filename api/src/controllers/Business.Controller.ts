import { Request, Response, NextFunction } from 'express';
import BusinessService from '../services/Business.Service';

class BusinessController {

    private businessService: BusinessService;

    constructor() {
        this.businessService = new BusinessService();
    }

    getAllBusinesses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const businesses = await this.businessService.getAllBusinesss();
            res.status(200).json({
                success: true,
                message: 'Businesses retrieved successfully.',
                data: businesses,
            });
        } catch (error) {
            next(error);
        }
    };

    createBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const businessData = req.body;
            const newBusiness = await this.businessService.createBusiness(businessData);
            res.status(201).json({
                success: true,
                message: 'Business created successfully.',
                data: newBusiness,
            });
        } catch (error) {
            next(error);
        }
    };

    getBusinessById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: businessId } = req.params;
            const business = await this.businessService.getBusinessById(businessId);
            res.status(200).json({
                success: true,
                message: 'Business details retrieved successfully.',
                data: business,
            });
        } catch (error) {
            next(error);
        }
    };
    
    getBusinessesByOwnerId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { ownerId } = req.params;
            const businesses = await this.businessService.getBusinessesByOwnerId(ownerId);
            res.status(200).json({
                success: true,
                message: 'User businesses retrieved successfully.',
                data: businesses,
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new BusinessController();
