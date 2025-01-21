import prisma from '../../config/Prisma.Config';
import { Wallet } from '@prisma/client';

class WalletService {
    async getAllWallets() {
        throw new Error('Method not implemented.');
    }
    async activateWallet(walletId: string) {
        throw new Error('Method not implemented.');
    }
    async deactivateWallet(walletId: string) {
        throw new Error('Method not implemented.');
    }
    async getWalletById(userId: string) {
        throw new Error('Method not implemented.');
    }
    async getWalletByUserId(userId: string) {
        throw new Error('Method not implemented.');
    }
}

export default WalletService;
