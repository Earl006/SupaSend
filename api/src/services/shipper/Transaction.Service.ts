import prisma from '../../config/Prisma.Config';
import { Transaction } from '@prisma/client';

class TransactionService {
    async getAllTransactions(userId: string, ) {
        throw new Error('Method not implemented.');
    }
    async getTransactionsByType(userId: string, type: string) {
        throw new Error('Method not implemented.');
    }
    async getTransactionsByStatus(userId: string, status: string) {
        throw new Error('Method not implemented.');
    }
    async getTransactionById(userId: string, transactionId: string) {
        throw new Error('Method not implemented.');
    }
    async getTransactionByReference(userId: string, reference: string) {
        throw new Error('Method not implemented.');
    }
    async deleteTransaction(userId: string, transactionId: string) {
        throw new Error('Method not implemented.');
    }
}

export default TransactionService;
