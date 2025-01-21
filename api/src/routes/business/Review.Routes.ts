import { Router } from 'express';
import ReviewController from '../../controllers/business/Review.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('BUSINESS'));

router.get('/reviews', ReviewController.getAllReviews);
router.post('/reviews/:id/report', ReviewController.reportReview);
router.get('/reviews/:id', ReviewController.getReviewById);

export default router;
