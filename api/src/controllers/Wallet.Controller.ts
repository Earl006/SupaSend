import { Request, Response, NextFunction } from 'express';
import WalletService from '../services/Wallet.Service';

class WalletController {

    private walletService: WalletService;

    constructor() {
        this.walletService = new WalletService();
    }

    getAllWallets = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getWalletById = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    createWallet = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    updateWallet = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    deleteWallet = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getWalletByUserId = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    activateWallet = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    deactivateWallet = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new WalletController();
