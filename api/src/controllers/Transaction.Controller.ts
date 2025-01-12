import { Request, Response, NextFunction } from 'express';
import TransactionService from '../services/Transaction.Service';

class TransactionController {

    private transactionService: TransactionService;

    constructor() {
        this.transactionService = new TransactionService();
    }

    getAllTransactions = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const transactions = await this.transactionService.getAllTransactions();
            res.status(200).json(transactions);
        } catch (error) {
            next(error);
        }
    };

    getTransactionById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: transactionId } = req.params;
            const transaction = await this.transactionService.getTransactionById(transactionId);
            res.status(200).json(transaction);
        } catch (error) {
            next(error);
        }
    };

    // createTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const transactionData = req.body;
    //         const newTransaction = await this.transactionService.createTransaction(transactionData);
    //         res.status(201).json(newTransaction);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // updateTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { id: transactionId } = req.params;
    //         const transactionData = req.body;
    //         const updatedTransaction = await this.transactionService.updateTransaction(transactionId, transactionData);
    //         res.status(200).json(updatedTransaction);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // deleteTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { id: transactionId } = req.params;
    //         await this.transactionService.deleteTransaction(transactionId);
    //         res.status(204).send();
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    getTransactionsByWalletId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { walletId } = req.params;
            const transactions = await this.transactionService.getTransactionsByWalletId(walletId);
            res.status(200).json(transactions);
        } catch (error) {
            next(error);
        }
    };

    getTransactionsByType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { type } = req.query;
            const transactions = await this.transactionService.getTransactionsByType(type as string);
            res.status(200).json(transactions);
        } catch (error) {
            next(error);
        }
    };

    getTransactionsByStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { status } = req.query;
            const transactions = await this.transactionService.getTransactionsByStatus(status as string);
            res.status(200).json(transactions);
        } catch (error) {
            next(error);
        }
    };

    getTransactionByReference = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { reference } = req.params;
            const transaction = await this.transactionService.getTransactionByReference(reference);
            res.status(200).json(transaction);
        } catch (error) {
            next(error);
        }
    };
}

export default new TransactionController();
