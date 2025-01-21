import { Request, Response, NextFunction } from 'express';
import PaymentService from '../../services/customer/Payment.Service';

class PaymentController {

    private paymentService: PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    getAllPayments = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const payments = await this.paymentService.getAllPayments(userId);
            res.status(200).json({
                success: true,
                message: 'Payments retrieved successfully.',
                data: payments
            });
        } catch (error) {
            next(error);
        }
    };

    getPaymentsByStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { status } = req.query;
            const payments = await this.paymentService.getPaymentsByStatus(userId, status as string);
            res.status(200).json({
                success: true,
                message: `${status} payments retrieved successfully.`,
                data: payments
            });
        } catch (error) {
            next(error);
        }
    };

    makePayment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const paymentData = req.body;
            const newPayment = await this.paymentService.makePayment(userId, paymentData);
            res.status(201).json({
                success: true,
                message: 'Payment created successfully.',
                data: newPayment
            });
        } catch (error) {
            next(error);
        }
    };

    getPaymentsByOrderId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { orderId } = req.params;
            const payments = await this.paymentService.getPaymentsByOrderId(userId, orderId);
            res.status(200).json({
                success: true,
                message: 'Order payments retrieved successfully.',
                data: payments
            });
        } catch (error) {
            next(error);
        }
    };

    getPaymentById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: paymentId } = req.params;
            const payment = await this.paymentService.getPaymentById(userId, paymentId);
            res.status(200).json({
                success: true,
                message: 'Payment details retrieved successfully.',
                data: payment
            });
        } catch (error) {
            next(error);
        }
    };
    
    deletePayment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: paymentId } = req.params;
            await this.paymentService.deletePayment(userId, paymentId);
            res.status(200).json({
                success: true,
                message: 'Payment deleted successfully.',
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new PaymentController();
