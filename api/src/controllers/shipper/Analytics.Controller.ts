import { Request, Response, NextFunction } from 'express';
import AnalyticsService from '../../services/shipper/Analytics.Service';

class AnalyticsController {

    private analyticsService: AnalyticsService;

    constructor() {
        this.analyticsService = new AnalyticsService();
    }

    getDeliveryAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const analytics = await this.analyticsService.getDeliveryAnalytics(userId);
            res.status(200).json({
                success: true,
                message: 'Delivery analytics retrieved successfully.',
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
