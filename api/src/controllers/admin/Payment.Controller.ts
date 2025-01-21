import { Request, Response, NextFunction } from 'express';
import PaymentService from '../../services/admin/Payment.Service';

class PaymentController {

    private paymentService: PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    getPaymentsByOrderId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { orderId } = req.params;
            const payments = await this.paymentService.getPaymentsByOrderId(orderId);
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
            const { id: paymentId } = req.params;
            const payment = await this.paymentService.getPaymentById(paymentId);
            res.status(200).json({
                success: true,
                message: 'Payment details retrieved successfully.',
                data: payment
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new PaymentController();
