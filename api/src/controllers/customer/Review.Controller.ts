import { Request, Response, NextFunction } from 'express';
import ReviewService from '../../services/customer/Review.Service';

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

    createReview = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { businessId } = req.params;
            const reviewData = req.body;
            const newReview = await this.reviewService.createReview(userId, businessId, reviewData);
            res.status(201).json({
                success: true,
                message: 'Review created successfully.',
                data: newReview
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    updateReview = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: reviewId } = req.params;
            const reviewData = req.body;
            const updatedReview = await this.reviewService.updateReview(userId, reviewId, reviewData);
            res.status(200).json({
                success: true,
                message: 'Review updated successfully.',
                data: updatedReview
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteReview = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: reviewId } = req.params;
            await this.reviewService.deleteReview(userId, reviewId);
            res.status(200).json({
                success: true,
                message: 'Review deleted successfully.'
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new ReviewController();
