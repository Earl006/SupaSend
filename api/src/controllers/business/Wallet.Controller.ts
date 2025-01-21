import { Request, Response, NextFunction } from 'express';
import WalletService from '../../services/business/Wallet.Service';

class WalletController {

    private walletService: WalletService;

    constructor() {
        this.walletService = new WalletService();
    }

    getMyWallet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const wallet = await this.walletService.getMyWallet(userId);
            res.status(200).json({
                success: true,
                message: 'Wallet details retrieved successfully.',
                data: wallet
            });
        } catch (error) {
            next(error);
        }
    };

    depositFunds = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { amount } = req.body;
            const transaction = await this.walletService.depositFunds(userId, amount);
            res.status(201).json({
                success: true,
                message: 'Funds deposited successfully.',
                data: transaction
            });
        } catch (error) {
            next(error);
        }
    };

    withdrawFunds = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { amount } = req.body;
            const transaction = await this.walletService.withdrawFunds(userId, amount);
            res.status(201).json({
                success: true,
                message: 'Funds withdrawn successfully.',
                data: transaction
            });
        } catch (error) {
            next(error);
        }
    };

    transferFunds = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { walletId, amount } = req.body;
            const transactions = await this.walletService.transferFunds(userId, walletId, amount);
            res.status(201).json({
                success: true,
                message: 'Funds transferred successfully.',
                data: transactions
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new WalletController();
