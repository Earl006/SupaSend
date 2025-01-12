import { Router } from 'express';
import ReviewController from '../controllers/Review.Controller';

const router = Router();

router.get('/', ReviewController.getAllReviews);
router.post('/:businessId', ReviewController.createReview);
router.get('/:id', ReviewController.getReviewById);
router.put('/:id', ReviewController.updateReview);
router.delete('/:id', ReviewController.deleteReview);
router.get('/customer/:customerId', ReviewController.getReviewsByCustomerId);
router.get('/business/:businessId', ReviewController.getReviewsByBusinessId);

export default router;
