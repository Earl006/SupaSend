import { Request, Response, NextFunction } from 'express';
import AnalyticsService from '../../services/customer/Analytics.Service';

class AnalyticsController {

    private analyticsService: AnalyticsService;

    constructor() {
        this.analyticsService = new AnalyticsService();
    }

    getCartAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const analytics = await this.analyticsService.getCartAnalytics(userId);
            res.status(200).json({
                success: true,
                message: 'Cart analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getCartItemAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const analytics = await this.analyticsService.getCartItemAnalytics(userId);
            res.status(200).json({
                success: true,
                message: 'Cart item analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getOrderAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const analytics = await this.analyticsService.getOrderAnalytics(userId);
            res.status(200).json({
                success: true,
                message: 'Order analytics retrieved successfully.',
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

    getPaymentAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const analytics = await this.analyticsService.getPaymentAnalytics(userId);
            res.status(200).json({
                success: true,
                message: 'Payment analytics retrieved successfully.',
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
