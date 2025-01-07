import { Request, Response, NextFunction } from 'express';
import PaymentMethodService from '../services/PaymentMethod.Service';

class PaymentMethodController {

    private paymentMethodService: PaymentMethodService;

    constructor() {
        this.paymentMethodService = new PaymentMethodService();
    }

    getAllPaymentMethods = async (req: Request, res: Response, next: NextFunction) => {

    }

    getPaymentMethodById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createPaymentMethod = async (req: Request, res: Response, next: NextFunction) => {

    }

    updatePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {

    }

    deletePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    activatePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    deactivatePaymentMethod = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new PaymentMethodController();
