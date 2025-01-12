import { Request, Response, NextFunction } from 'express';
import AnalyticsService from '../services/Analytics.Service';

class AnalyticsController {

    private analyticsService: AnalyticsService;

    constructor() {
        this.analyticsService = new AnalyticsService();
    }

    getAdminAddressAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminAddressAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminAdminAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminAdminAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminBusinessAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminBusinessAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminBusinessOrderAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminBusinessOrderAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminCartAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminCartAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminCartItemAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminCartItemAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminCategoryAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminCategoryAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminCustomerAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminCustomerAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminDeliveryAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminDeliveryAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminOrderAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminOrderAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminOrderItemAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminOrderItemAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminPaymentAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminPaymentAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminPaymentMethodAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminPaymentMethodAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminProductAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminProductAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminReviewAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminReviewAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminShipperAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminShipperAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminTransactionAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminTransactionAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminWalletAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminWalletAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminZoneAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminZoneAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminUserAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getAdminUserAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getBusinessBusinessOrderAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getBusinessBusinessOrderAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getBusinessOrderItemAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getBusinessOrderItemAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getBusinessProductAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getBusinessProductAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getBusinessReviewAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getBusinessReviewAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getBusinessTransactionAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getBusinessTransactionAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getBusinessWalletAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getBusinessWalletAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getCustomerCartAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getCustomerCartAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getCustomerCartItemAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getCustomerCartItemAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getCustomerOrderAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getCustomerOrderAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getCustomerOrderItemAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getCustomerOrderItemAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getCustomerPaymentAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getCustomerPaymentAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getCustomerReviewAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getCustomerReviewAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getCustomerTransactionAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getCustomerTransactionAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getCustomerWalletAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getCustomerWalletAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getShipperDeliveryAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getShipperDeliveryAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getShipperTransactionAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getShipperTransactionAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }

    getShipperWalletAnalytics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const analyticsData = await this.analyticsService.getShipperWalletAnalytics();
            res.status(200).json(analyticsData);
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new AnalyticsController();
