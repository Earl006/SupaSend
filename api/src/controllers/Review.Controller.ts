import { Request, Response, NextFunction } from 'express';
import ReviewService from '../services/Review.Service';

class ReviewController {

    private reviewService: ReviewService;

    constructor() {
        this.reviewService = new ReviewService();
    }

    getAllReviews = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const reviews = await this.reviewService.getAllReviews();
            res.status(200).json(reviews);
        } catch (error: unknown) {
            next(error);
        }
    }

    getReviewById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const reviewId = req.params.id;
            const review = await this.reviewService.getReviewById(reviewId);
            res.status(200).json(review);
        } catch (error: unknown) {
            next(error);
        }
    }

    createReview = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.id as string;
            const businessId = req.params.businessId;
            const newReview = await this.reviewService.createReview(userId, businessId, req.body);
            res.status(201).json(newReview);
        } catch (error: unknown) {
            next(error);
        }
    }

    updateReview = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const reviewId = req.params.id;
            const updatedReview = await this.reviewService.updateReview(reviewId, req.body);
            res.status(200).json(updatedReview);
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteReview = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const reviewId = req.params.id;
            await this.reviewService.deleteReview(reviewId);
            res.status(204).send();
        } catch (error: unknown) {
            next(error);
        }
    }

    getReviewsByCustomerId = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const customerId = req.params.customerId;
            const reviews = await this.reviewService.getReviewsByCustomerId(customerId);
            res.status(200).json(reviews);
        } catch (error: unknown) {
            next(error);
        }
    }

    getReviewsByBusinessId = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const businessId = req.params.businessId;
            const reviews = await this.reviewService.getReviewsByBusinessId(businessId);
            res.status(200).json(reviews);
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new ReviewController();
