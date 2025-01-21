import prisma from "../../config/Prisma.Config";

class AnalyticsService {
    async getDeliveryAnalytics(userId: string) {
        throw new Error('Method not implemented.');
    }
    async getReviewAnalytics(userId: string) {
        throw new Error('Method not implemented.');
    }
    async getTransactionAnalytics(userId: string) {
        throw new Error('Method not implemented.');
    }
    async getWalletAnalytics(userId: string) {
        throw new Error('Method not implemented.');
    }
}

export default AnalyticsService;
