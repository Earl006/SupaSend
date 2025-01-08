import { Request, Response, NextFunction } from 'express';
import PaymentMethodService from '../services/PaymentMethod.Service';

class PaymentMethodController {

    private paymentMethodService: PaymentMethodService;

    constructor() {
        this.paymentMethodService = new PaymentMethodService();
    }

    getAllPaymentMethods = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getPaymentMethodById = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    createPaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    updatePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    deletePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    activatePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    deactivatePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new PaymentMethodController();
