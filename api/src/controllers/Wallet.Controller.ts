import { Request, Response, NextFunction } from 'express';
import WalletService from '../services/Wallet.Service';

class WalletController {

    private walletService: WalletService;

    constructor() {
        this.walletService = new WalletService();
    }

    getAllWallets = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const wallets = await this.walletService.getAllWallets();
            res.status(200).json(wallets);
        } catch (error) {
            next(error);
        }
    };

    getWalletById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: walletId } = req.params;
            const wallet = await this.walletService.getWalletById(walletId);
            res.status(200).json(wallet);
        } catch (error) {
            next(error);
        }
    };

    // createWallet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const walletData = req.body;
    //         const newWallet = await this.walletService.createWallet(walletData);
    //         res.status(201).json(newWallet);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // updateWallet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { id: walletId } = req.params;
    //         const walletData = req.body;
    //         const updatedWallet = await this.walletService.updateWallet(walletId, walletData);
    //         res.status(200).json(updatedWallet);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // deleteWallet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { id: walletId } = req.params;
    //         await this.walletService.deleteWallet(walletId);
    //         res.status(204).send();
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    getWalletByUserId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { userId } = req.params;
            const wallet = await this.walletService.getWalletByUserId(userId);
            res.status(200).json(wallet);
        } catch (error) {
            next(error);
        }
    };

    activateWallet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: walletId } = req.params;
            const activatedWallet = await this.walletService.activateWallet(walletId);
            res.status(200).json(activatedWallet);
        } catch (error) {
            next(error);
        }
    };

    deactivateWallet = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: walletId } = req.params;
            const deactivatedWallet = await this.walletService.deactivateWallet(walletId);
            res.status(200).json(deactivatedWallet);
        } catch (error) {
            next(error);
        }
    };

    // depositFunds = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { id: walletId } = req.params;
    //         const { amount } = req.body;
    //         const transaction = await this.walletService.depositFunds(walletId, amount);
    //         res.status(201).json(transaction);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // withdrawFunds = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { id: walletId } = req.params;
    //         const { amount } = req.body;
    //         const transaction = await this.walletService.withdrawFunds(walletId, amount);
    //         res.status(201).json(transaction);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // makePayment = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { id: walletId } = req.params;
    //         const { amount, orderId } = req.body;
    //         const transaction = await this.walletService.makePayment(walletId, amount, orderId);
    //         res.status(201).json(transaction);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // processRefund = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { id: walletId } = req.params;
    //         const { amount, paymentId } = req.body;
    //         const transaction = await this.walletService.processRefund(walletId, amount, paymentId);
    //         res.status(201).json(transaction);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // transferFunds = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { senderWalletId, receiverWalletId, amount } = req.body;
    //         const transactions = await this.walletService.transferFunds(senderWalletId, receiverWalletId, amount);
    //         res.status(201).json(transactions);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    // reverseTransaction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const { id: walletId, transactionId } = req.params;
    //         const transaction = await this.walletService.reverseTransaction(walletId, transactionId);
    //         res.status(200).json(transaction);
    //     } catch (error) {
    //         next(error);
    //     }
    // };
}

export default new WalletController();
