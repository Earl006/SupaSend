import { Request, Response, NextFunction } from 'express';
import WalletService from '../services/Wallet.Service';

class WalletController {

    private walletService: WalletService;

    constructor() {
        this.walletService = new WalletService();
    }

    getAllWallets = async (req: Request, res: Response, next: NextFunction) => {

    }

    getWalletById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createWallet = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateWallet = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteWallet = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getWalletByUserId = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    activateWallet = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    deactivateWallet = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new WalletController();
