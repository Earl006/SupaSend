import prisma from '../config/Prisma.Config';
import { Review } from '@prisma/client';

class ReviewService {
    async getAllReviews() {
        throw new Error('Method not implemented.');
    }
    async getReviewById(reviewId: string) {
        throw new Error('Method not implemented.');
    }
    async createReview(userId: string, businessId: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async updateReview(reviewId: string, body: any) {
        throw new Error('Method not implemented.');
    }
    async deleteReview(reviewId: string) {
        throw new Error('Method not implemented.');
    }
    async getReviewsByCustomerId(customerId: string) {
        throw new Error('Method not implemented.');
    }
    async getReviewsByBusinessId(businessId: string) {
        throw new Error('Method not implemented.');
    }
}

export default ReviewService;
