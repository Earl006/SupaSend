import { Request, Response, NextFunction } from 'express';
import BusinessService from '../../services/business/Business.Service';

class BusinessController {

    private businessService: BusinessService;

    constructor() {
        this.businessService = new BusinessService();
    }

    getBusinessOwnerProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const businessOwnerProfile = await this.businessService.getBusinessOwnerProfile(userId);
            res.status(200).json({
                success: true,
                message: 'Business owner profile retrieved successfully.',
                data: businessOwnerProfile,
            });
        } catch (error) {
            next(error);
        }
    };

    updateBusinessOwnerProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const businessOwnerData = req.body;
            const updatedBusinessOwnerProfile = await this.businessService.updateBusinessOwnerProfile(userId, businessOwnerData);
            res.status(200).json({
                success: true,
                message: 'Business owner profile updated successfully.',
                data: updatedBusinessOwnerProfile,
            });
        } catch (error) {
            next(error);
        }
    };

    deleteBusinessAccount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            await this.businessService.deleteBusinessAccount(userId);
            res.status(200).json({
                success: true,
                message: 'Account deleted successfully.',
            });
        } catch (error) {
            next(error);
        }
    };

    getAllBusinesses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const businesses = await this.businessService.getAllBusinesss(userId);
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
            const userId = req.user?.id as string;
            const businessData = req.body;
            const newBusiness = await this.businessService.createBusiness(userId, businessData);
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
            const userId = req.user?.id as string;
            const { id: businessId } = req.params;
            const business = await this.businessService.getBusinessById(userId, businessId);
            res.status(200).json({
                success: true,
                message: 'Business details retrieved successfully.',
                data: business,
            });
        } catch (error) {
            next(error);
        }
    };

    updateBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: businessId } = req.params;
            const businessData = req.body;
            const updatedBusiness = await this.businessService.updateBusiness(userId, businessId, businessData);
            res.status(200).json({
                success: true,
                message: 'Business updated successfully.',
                data: updatedBusiness,
            });
        } catch (error) {
            next(error);
        }
    };

    deleteBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: businessId } = req.params;
            await this.businessService.deleteBusiness(userId, businessId);
            res.status(200).json({
                success: true,
                message: 'Business deleted successfully.',
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new BusinessController();
