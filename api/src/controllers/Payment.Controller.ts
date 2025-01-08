import { Request, Response, NextFunction } from 'express';
import PaymentService from '../services/Payment.Service';

class PaymentController {

    private paymentService: PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    getAllPayments = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getPaymentById = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    createPayment = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    // updatePayment = async (req: Request, res: Response, next: NextFunction) => {
        // try {

        // } catch (error: unknown) {
        //     next(error);
        // }
    // }

    deletePayment = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getPaymentsByOrderId = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getPaymentsByStatus = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new PaymentController();
