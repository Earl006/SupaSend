import { Request, Response, NextFunction } from 'express';
import AnalyticsService from '../../services/business/Analytics.Service';

class AnalyticsController {

    private analyticsService: AnalyticsService;

    constructor() {
        this.analyticsService = new AnalyticsService();
    }

    getBusinessOrderAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const analytics = await this.analyticsService.getBusinessOrderAnalytics(userId);
            res.status(200).json({
                success: true,
                message: 'Business order analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getOrderItemAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const analytics = await this.analyticsService.getOrderItemAnalytics(userId);
            res.status(200).json({
                success: true,
                message: 'Order item analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getProductAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const analytics = await this.analyticsService.getProductAnalytics(userId);
            res.status(200).json({
                success: true,
                message: 'Product analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getReviewAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const analytics = await this.analyticsService.getReviewAnalytics(userId);
            res.status(200).json({
                success: true,
                message: 'Review analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getTransactionAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const analytics = await this.analyticsService.getTransactionAnalytics(userId);
            res.status(200).json({
                success: true,
                message: 'Transaction analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getWalletAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const analytics = await this.analyticsService.getWalletAnalytics(userId);
            res.status(200).json({
                success: true,
                message: 'Wallet analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new AnalyticsController();
