import { Request, Response, NextFunction } from 'express';
import ReviewService from '../../services/business/Review.Service';

class ReviewController {

    private reviewService: ReviewService;

    constructor() {
        this.reviewService = new ReviewService();
    }

    getAllReviews = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const reviews = await this.reviewService.getAllReviews(userId);
            res.status(200).json({
                success: true,
                message: 'Reviews retrieved successfully.',
                data: reviews
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    reportReview = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: reviewId } = req.params;
            const review = await this.reviewService.reportReview(userId, reviewId);
            res.status(200).json({
                success: true,
                message: 'Review reported successfully.',
                data: review
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getReviewById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: reviewId } = req.params;
            const review = await this.reviewService.getReviewById(userId, reviewId);
            res.status(200).json({
                success: true,
                message: 'Review details retrieved successfully.',
                data: review
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new ReviewController();
