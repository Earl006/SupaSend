import { Request, Response, NextFunction } from 'express';
import TransactionService from '../../services/shipper/Transaction.Service';

class TransactionController {

    private transactionService: TransactionService;

    constructor() {
        this.transactionService = new TransactionService();
    }

    getAllTransactions = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const transactions = await this.transactionService.getAllTransactions(userId);
            res.status(200).json({
                success: true,
                message: 'Transactions retrieved successfully.',
                data: transactions
            });
        } catch (error) {
            next(error);
        }
    };

    getTransactionsByType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { type } = req.query;
            const transactions = await this.transactionService.getTransactionsByType(userId, type as string);
            res.status(200).json({
                success: true,
                message: `${type} transactions retrieved successfully.`,
                data: transactions
            });
        } catch (error) {
            next(error);
        }
    };

    getTransactionsByStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { status } = req.query;
            const transactions = await this.transactionService.getTransactionsByStatus(userId, status as string);
            res.status(200).json({
                success: true,
                message: `${status} transactions retrieved successfully.`,
                data: transactions
            });
        } catch (error) {
            next(error);
        }
    };

    getTransactionById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: transactionId } = req.params;
            const transaction = await this.transactionService.getTransactionById(userId, transactionId);
            res.status(200).json({
                success: true,
                message: 'Transaction details retrieved successfully.',
                data: transaction
            });
        } catch (error) {
            next(error);
        }
    };
    
    getTransactionByReference = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { reference } = req.params;
            const transaction = await this.transactionService.getTransactionByReference(userId, reference);
            res.status(200).json({
                success: true,
                message: 'Reference transactions retrieved successfully.',
                data: transaction
            });
        } catch (error) {
            next(error);
        }
    };

    deleteTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: transactionId } = req.params;
            await this.transactionService.deleteTransaction(userId, transactionId);
            res.status(200).json({
                success: true,
                message: 'Transaction deleted successfully.'
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new TransactionController();
