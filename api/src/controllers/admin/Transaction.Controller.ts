import { Request, Response, NextFunction } from 'express';
import TransactionService from '../../services/admin/Transaction.Service';

class TransactionController {

    private transactionService: TransactionService;

    constructor() {
        this.transactionService = new TransactionService();
    }

    getTransactionsByType = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { walletId } = req.params;
            const { type } = req.query;
            const transactions = await this.transactionService.getTransactionsByType(walletId, type as string);
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
            const { walletId } = req.params;
            const { status } = req.query;
            const transactions = await this.transactionService.getTransactionsByStatus(walletId, status as string);
            res.status(200).json({
                success: true,
                message: `${status} transactions retrieved successfully.`,
                data: transactions
            });
        } catch (error) {
            next(error);
        }
    };

    getTransactionByReference = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { walletId } = req.params;
            const { reference } = req.params;
            const transaction = await this.transactionService.getTransactionByReference(walletId, reference);
            res.status(200).json({
                success: true,
                message: 'Reference transactions retrieved successfully.',
                data: transaction
            });
        } catch (error) {
            next(error);
        }
    };

    getTransactionsByWalletId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { walletId } = req.params;
            const transactions = await this.transactionService.getTransactionsByWalletId(walletId);
            res.status(200).json({
                success: true,
                message: 'Wallet transactions retrieved successfully.',
                data: transactions
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new TransactionController();
