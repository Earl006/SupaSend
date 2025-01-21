import { Request, Response, NextFunction } from 'express';
import PaymentMethodService from '../services/PaymentMethod.Service';

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
}

export default new PaymentMethodController();
