import { Request, Response, NextFunction } from 'express';
import PaymentService from '../services/Payment.Service';

class PaymentController {

    private paymentService: PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    getAllPayments = async (req: Request, res: Response, next: NextFunction) => {

    }

    getPaymentById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createPayment = async (req: Request, res: Response, next: NextFunction) => {

    }

    // updatePayment = async (req: Request, res: Response, next: NextFunction) => {

    // }

    deletePayment = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getPaymentsByOrderId = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getPaymentsByStatus = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new PaymentController();
