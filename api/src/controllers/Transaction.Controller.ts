import { Request, Response, NextFunction } from 'express';
import TransactionService from '../services/Transaction.Service';

class TransactionController {

    private transactionService: TransactionService;

    constructor() {
        this.transactionService = new TransactionService();
    }

    getAllTransactions = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getTransactionById = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    // createTransaction = async (req: Request, res: Response, next: NextFunction) => {
        // try {

        // } catch (error: unknown) {
        //     next(error);
        // }
    // }

    updateTransaction = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    deleteTransaction = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getTransactionsByWalletId = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getTransactionsByType = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getTransactionsByStatus = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new TransactionController();
