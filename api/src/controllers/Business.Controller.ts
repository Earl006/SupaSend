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
            res.status(200).json(businesses);
        } catch (error) {
            next(error);
        }
    };

    getBusinessById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: businessId } = req.params;
            const business = await this.businessService.getBusinessById(businessId);
            res.status(200).json(business);
        } catch (error) {
            next(error);
        }
    };

    createBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const businessData = req.body;
            const newBusiness = await this.businessService.createBusiness(userId, businessData);
            res.status(201).json(newBusiness);
        } catch (error) {
            next(error);
        }
    };

    updateBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: businessId } = req.params;
            const businessData = req.body;
            const updatedBusiness = await this.businessService.updateBusiness(businessId, businessData);
            res.status(200).json(updatedBusiness);
        } catch (error) {
            next(error);
        }
    };

    deleteBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: businessId } = req.params;
            await this.businessService.deleteBusiness(businessId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    requestBusinessAccount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            await this.businessService.requestBusinessAccount(userId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    approveBusinessAccount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { businessId } = req.params;
            await this.businessService.approveBusinessAccount(userId, businessId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    getBusinessesByOwnerId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { ownerId } = req.params;
            const businesses = await this.businessService.getBusinessesByOwnerId(ownerId);
            res.status(200).json(businesses);
        } catch (error) {
            next(error);
        }
    };

    getBusinessProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { businessId } = req.params;
            const businessProfile = await this.businessService.getBusinessProfile(userId, businessId);
            res.status(200).json(businessProfile);
        } catch (error) {
            next(error);
        }
    };

    updateBusinessProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { businessId } = req.params;
            const businessData = req.body;
            const updatedBusinessProfile = await this.businessService.updateBusinessProfile(userId, businessId, businessData);
            res.status(200).json(updatedBusinessProfile);
        } catch (error) {
            next(error);
        }
    };
}

export default new BusinessController();
