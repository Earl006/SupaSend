import { Request, Response, NextFunction } from 'express';
import ReviewService from '../services/Review.Service';

class ReviewController {

    private reviewService: ReviewService;

    constructor() {
        this.reviewService = new ReviewService();
    }

    getReviewsByBusinessId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { businessId } = req.params;
            const reviews = await this.reviewService.getReviewsByBusinessId(businessId);
            res.status(200).json({
                success: true,
                message: 'Business reviews retrieved successfully.',
                data: reviews
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new ReviewController();
