import { Router } from 'express';
import ReviewController from '../controllers/Review.Controller';

const router = Router();

router.get('/reviews/business/:businessId', ReviewController.getReviewsByBusinessId);

export default router;
