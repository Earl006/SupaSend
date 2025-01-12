import { Request, Response, NextFunction } from 'express';
import PaymentService from '../services/Payment.Service';

class PaymentController {

    private paymentService: PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    getAllPayments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const payments = await this.paymentService.getAllPayments();
            res.status(200).json(payments);
        } catch (error) {
            next(error);
        }
    };

    getPaymentById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: paymentId } = req.params;
            const payment = await this.paymentService.getPaymentById(paymentId);
            res.status(200).json(payment);
        } catch (error) {
            next(error);
        }
    };

    // createPayment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const paymentData = req.body;
    //         const newPayment = await this.paymentService.createPayment(paymentData);
    //         res.status(201).json(newPayment);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // updatePayment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { id: paymentId } = req.params;
    //         const paymentData = req.body;
    //         const updatedPayment = await this.paymentService.updatePayment(paymentId, paymentData);
    //         res.status(200).json(updatedPayment);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // deletePayment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { id: paymentId } = req.params;
    //         await this.paymentService.deletePayment(paymentId);
    //         res.status(204).send();
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    getPaymentsByOrderId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { orderId } = req.params;
            const payments = await this.paymentService.getPaymentsByOrderId(orderId);
            res.status(200).json(payments);
        } catch (error) {
            next(error);
        }
    };

    getPaymentsByStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { status } = req.query;
            const payments = await this.paymentService.getPaymentsByStatus(status as string);
            res.status(200).json(payments);
        } catch (error) {
            next(error);
        }
    };
}

export default new PaymentController();
