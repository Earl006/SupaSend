import prisma from '../../config/Prisma.Config';
import { Review } from '@prisma/client';

class ReviewService {
    async getAllReviews(userId: string) {
        throw new Error('Method not implemented.');
    }
    async reportReview(userId: string, reviewId: string) {
        throw new Error('Method not implemented.');
    }
    async getReviewById(userId: string, reviewId: string) {
        throw new Error('Method not implemented.');
    }
}

export default ReviewService;
