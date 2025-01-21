import { Request, Response, NextFunction } from 'express';
import PaymentMethodService from '../../services/admin/PaymentMethod.Service';

class PaymentMethodController {

    private paymentMethodService: PaymentMethodService;

    constructor() {
        this.paymentMethodService = new PaymentMethodService();
    }

    getAllPaymentMethods = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const paymentMethods = await this.paymentMethodService.getAllPaymentMethods();
            res.status(200).json({
                success: true,
                message: 'Payment methods retrieved successfully.',
                data: paymentMethods
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    createPaymentMethod = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const paymentMethodData = req.body;
            const newPaymentMethod = await this.paymentMethodService.createPaymentMethod(paymentMethodData);
            res.status(201).json({
                success: true,
                message: 'Payment method created successfully.',
                data: newPaymentMethod
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    activatePaymentMethod = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: paymentMethodId } = req.params;
            await this.paymentMethodService.activatePaymentMethod(paymentMethodId);
            res.status(200).json({
                success: true,
                message: 'Payment method activated successfully.'
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    deactivatePaymentMethod = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: paymentMethodId } = req.params;
            await this.paymentMethodService.deactivatePaymentMethod(paymentMethodId);
            res.status(200).json({
                success: true,
                message: 'Payment method deactivated successfully.'
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getPaymentMethodById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: paymentMethodId } = req.params;
            const paymentMethod = await this.paymentMethodService.getPaymentMethodById(paymentMethodId);
            res.status(200).json({
                success: true,
                message: 'Payment method details retrieved successfully.',
                data: paymentMethod
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    updatePaymentMethod = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: paymentMethodId } = req.params;
            const paymentMethodData = req.body;
            const updatedPaymentMethod = await this.paymentMethodService.updatePaymentMethod(paymentMethodId, paymentMethodData);
            res.status(200).json({
                success: true,
                message: 'Payment method updated successfully.',
                data: updatedPaymentMethod
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    deletePaymentMethod = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: paymentMethodId } = req.params;
            await this.paymentMethodService.deletePaymentMethod(paymentMethodId);
            res.status(200).json({
                success: true,
                message: 'Payment method deleted successfully.'
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new PaymentMethodController();
