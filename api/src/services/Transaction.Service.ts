import prisma from '../config/Prisma.Config';
import { Transaction } from '@prisma/client';

class TransactionService {
    async getAllTransactions() {
        throw new Error('Method not implemented.');
    }
    async getTransactionById(transactionId: string) {
        throw new Error('Method not implemented.');
    }
    async createTransaction(transactionData: any) {
        throw new Error('Method not implemented.');
    }
    async updateTransaction(transactionId: string, transactionData: any) {
        throw new Error('Method not implemented.');
    }
    async deleteTransaction(transactionId: string) {
        throw new Error('Method not implemented.');
    }
    async getTransactionsByWalletId(walletId: string) {
        throw new Error('Method not implemented.');
    }
    async getTransactionsByType(arg0: string) {
        throw new Error('Method not implemented.');
    }
    async getTransactionsByStatus(arg0: string) {
        throw new Error('Method not implemented.');
    }
    async getTransactionByReference(reference: string) {
        throw new Error('Method not implemented.');
    }
}

export default TransactionService;
