import { Request, Response, NextFunction } from 'express';
import ReviewService from '../services/Review.Service';

class ReviewController {

    private reviewService: ReviewService;

    constructor() {
        this.reviewService = new ReviewService();
    }

    getAllReviews = async (req: Request, res: Response, next: NextFunction) => {

    }

    getReviewById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createReview = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateReview = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteReview = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getReviewsByCustomerId = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getReviewsByBusinessId = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new ReviewController();
