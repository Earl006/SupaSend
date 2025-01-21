import prisma from '../../config/Prisma.Config';
import { Transaction } from '@prisma/client';

class TransactionService {
    async getTransactionsByType(walletId: string, arg1: string) {
        throw new Error('Method not implemented.');
    }
    async getTransactionsByStatus(walletId: string, arg1: string) {
        throw new Error('Method not implemented.');
    }
    async getTransactionByReference(walletId: string, reference: string) {
        throw new Error('Method not implemented.');
    }
    async getTransactionsByWalletId(walletId: string) {
        throw new Error('Method not implemented.');
    }
}

export default TransactionService;
