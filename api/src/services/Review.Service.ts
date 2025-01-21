import prisma from '../config/Prisma.Config';
import { Review } from '@prisma/client';

class ReviewService {
    async getReviewsByBusinessId(businessId: string) {
        throw new Error('Method not implemented.');
    }
}

export default ReviewService;
