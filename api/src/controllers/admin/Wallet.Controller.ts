import { Request, Response, NextFunction } from 'express';
import WalletService from '../../services/admin/Wallet.Service';

class WalletController {

    private walletService: WalletService;

    constructor() {
        this.walletService = new WalletService();
    }

    getAllWallets = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const wallets = await this.walletService.getAllWallets();
            res.status(200).json({
                success: true,
                message: 'Wallets retrieved successfully.',
                data: wallets
            });
        } catch (error) {
            next(error);
        }
    };

    activateWallet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: walletId } = req.params;
            await this.walletService.activateWallet(walletId);
            res.status(200).json({
                success: true,
                message: 'Wallet activated successfully.'
            });
        } catch (error) {
            next(error);
        }
    };

    deactivateWallet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: walletId } = req.params;
            await this.walletService.deactivateWallet(walletId);
            res.status(200).json({
                success: true,
                message: 'Wallet deactivated successfully.'
            });
        } catch (error) {
            next(error);
        }
    };

    getWalletById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: walletId } = req.params;
            const wallet = await this.walletService.getWalletById(walletId);
            res.status(200).json({
                success: true,
                message: 'Wallet details retrieved successfully.',
                data: wallet
            });
        } catch (error) {
            next(error);
        }
    };

    getWalletByUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { userId } = req.params;
            const wallet = await this.walletService.getWalletByUserId(userId);
            res.status(200).json({
                success: true,
                message: 'User wallet retrieved successfully.',
                data: wallet
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new WalletController();
