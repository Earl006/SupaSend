import { Request, Response, NextFunction } from 'express';
import ReviewService from '../../services/admin/Review.Service';

class ReviewController {

    private reviewService: ReviewService;

    constructor() {
        this.reviewService = new ReviewService();
    }

    getReviewById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: reviewId } = req.params;
            const review = await this.reviewService.getReviewById(reviewId);
            res.status(200).json({
                success: true,
                message: 'Review details retrieved successfully.',
                data: review
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteReview = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: reviewId } = req.params;
            await this.reviewService.deleteReview(reviewId);
            res.status(200).json({
                success: true,
                message: 'Review deleted successfully.'
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getReviewsByCustomerId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { customerId } = req.params;
            const reviews = await this.reviewService.getReviewsByCustomerId(customerId);
            res.status(200).json({
                success: true,
                message: 'Customer reviews retrieved successfully.',
                data: reviews
            });
        } catch (error: unknown) {
            next(error);
        }
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
