import prisma from '../config/Prisma.Config';
import { Wallet } from '@prisma/client';

class WalletService {
    async depositFunds(walletId: string, amount: any) {
        throw new Error('Method not implemented.');
    }
    async withdrawFunds(walletId: string, amount: any) {
        throw new Error('Method not implemented.');
    }
    async makePayment(walletId: string, amount: any, orderId: any) {
        throw new Error('Method not implemented.');
    }
    async processRefund(walletId: string, amount: any, paymentId: any) {
        throw new Error('Method not implemented.');
    }
    async transferFunds(senderWalletId: any, receiverWalletId: any, amount: any) {
        throw new Error('Method not implemented.');
    }
    async reverseTransaction(walletId: string, transactionId: string) {
        throw new Error('Method not implemented.');
    }
    async getAllWallets() {
        throw new Error('Method not implemented.');
    }
    async getWalletById(walletId: string) {
        throw new Error('Method not implemented.');
    }
    async createWallet(walletData: any) {
        throw new Error('Method not implemented.');
    }
    async updateWallet(walletId: string, walletData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteWallet(walletId: string) {
        throw new Error('Method not implemented.');
    }
    async getWalletByUserId(userId: string) {
        throw new Error('Method not implemented.');
    }
    async activateWallet(walletId: string) {
        throw new Error('Method not implemented.');
    }
    async deactivateWallet(walletId: string) {
        throw new Error('Method not implemented.');
    }
}

export default WalletService;
