import prisma from '../../config/Prisma.Config';
import { Wallet } from '@prisma/client';

class WalletService {
    async getMyWallet(userId: string) {
        throw new Error('Method not implemented.');
    }
    async depositFunds(userId: string, amount: any) {
        throw new Error('Method not implemented.');
    }
    async withdrawFunds(userId: string, amount: any) {
        throw new Error('Method not implemented.');
    }
    async transferFunds(userId: any, walletId: any, amount: any) {
        throw new Error('Method not implemented.');
    }
}

export default WalletService;
