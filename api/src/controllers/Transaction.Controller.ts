import { Request, Response, NextFunction } from 'express';
import TransactionService from '../services/Transaction.Service';

class TransactionController {

    private transactionService: TransactionService;

    constructor() {
        this.transactionService = new TransactionService();
    }

    getAllTransactions = async (req: Request, res: Response, next: NextFunction) => {

    }

    getTransactionById = async (req: Request, res: Response, next: NextFunction) => {

    }

    // createTransaction = async (req: Request, res: Response, next: NextFunction) => {

    // }

    updateTransaction = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteTransaction = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getTransactionsByWalletId = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getTransactionsByType = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getTransactionsByStatus = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new TransactionController();
