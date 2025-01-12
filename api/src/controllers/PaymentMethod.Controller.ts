import { Request, Response, NextFunction } from 'express';
import PaymentMethodService from '../services/PaymentMethod.Service';

class PaymentMethodController {

    private paymentMethodService: PaymentMethodService;

    constructor() {
        this.paymentMethodService = new PaymentMethodService();
    }

    getAllPaymentMethods = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const paymentMethods = await this.paymentMethodService.getAllPaymentMethods();
            res.status(200).json(paymentMethods);
        } catch (error: unknown) {
            next(error);
        }
    }

    getPaymentMethodById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const paymentMethodId = req.params.id;
            const paymentMethod = await this.paymentMethodService.getPaymentMethodById(paymentMethodId);
            res.status(200).json(paymentMethod);
        } catch (error: unknown) {
            next(error);
        }
    }

    createPaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newPaymentMethod = await this.paymentMethodService.createPaymentMethod(req.body);
            res.status(201).json(newPaymentMethod);
        } catch (error: unknown) {
            next(error);
        }
    }

    updatePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const paymentMethodId = req.params.id;
            const updatedPaymentMethod = await this.paymentMethodService.updatePaymentMethod(paymentMethodId, req.body);
            res.status(200).json(updatedPaymentMethod);
        } catch (error: unknown) {
            next(error);
        }
    }

    deletePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const paymentMethodId = req.params.id;
            await this.paymentMethodService.deletePaymentMethod(paymentMethodId);
            res.status(204).send();
        } catch (error: unknown) {
            next(error);
        }
    }

    activatePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const paymentMethodId = req.params.id;
            await this.paymentMethodService.activatePaymentMethod(paymentMethodId);
            res.status(204).send();
        } catch (error: unknown) {
            next(error);
        }
    }

    deactivatePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const paymentMethodId = req.params.id;
            await this.paymentMethodService.deactivatePaymentMethod(paymentMethodId);
            res.status(204).send();
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new PaymentMethodController();
