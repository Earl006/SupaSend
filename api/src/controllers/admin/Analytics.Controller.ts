import { Request, Response, NextFunction } from 'express';
import AnalyticsService from '../../services/admin/Analytics.Service';

class AnalyticsController {

    private analyticsService: AnalyticsService;

    constructor() {
        this.analyticsService = new AnalyticsService();
    }

    getAddressAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getAddressAnalytics();
            res.status(200).json({
                success: true,
                message: 'Address analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getAdminAnalytics();
            res.status(200).json({
                success: true,
                message: 'Admin analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getBusinessAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getBusinessAnalytics();
            res.status(200).json({
                success: true,
                message: 'Business analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getBusinessOrderAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getBusinessOrderAnalytics();
            res.status(200).json({
                success: true,
                message: 'Business order analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getCartAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getCartAnalytics();
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
            const analytics = await this.analyticsService.getCartItemAnalytics();
            res.status(200).json({
                success: true,
                message: 'Cart item analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getCategoryAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getCategoryAnalytics();
            res.status(200).json({
                success: true,
                message: 'Category analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getCustomerAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getCustomerAnalytics();
            res.status(200).json({
                success: true,
                message: 'Customer analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getDeliveryAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getDeliveryAnalytics();
            res.status(200).json({
                success: true,
                message: 'Delivery analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getOrderAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getOrderAnalytics();
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
            const analytics = await this.analyticsService.getOrderItemAnalytics();
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
            const analytics = await this.analyticsService.getPaymentAnalytics();
            res.status(200).json({
                success: true,
                message: 'Payment analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getPaymentMethodAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getPaymentMethodAnalytics();
            res.status(200).json({
                success: true,
                message: 'Payment method analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getProductAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getProductAnalytics();
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
            const analytics = await this.analyticsService.getReviewAnalytics();
            res.status(200).json({
                success: true,
                message: 'Review analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getShipperAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getShipperAnalytics();
            res.status(200).json({
                success: true,
                message: 'Shipper analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getTransactionAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getTransactionAnalytics();
            res.status(200).json({
                success: true,
                message: 'Transaction analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getUserAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getUserAnalytics();
            res.status(200).json({
                success: true,
                message: 'User analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getWalletAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getWalletAnalytics();
            res.status(200).json({
                success: true,
                message: 'Wallet analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getZoneAnalytics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const analytics = await this.analyticsService.getZoneAnalytics();
            res.status(200).json({
                success: true,
                message: 'Zone analytics retrieved successfully.',
                data: analytics,
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new AnalyticsController();
