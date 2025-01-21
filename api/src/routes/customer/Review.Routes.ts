import { Router } from 'express';
import ReviewController from '../../controllers/customer/Review.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('CUSTOMER'));

router.get('/reviews', ReviewController.getAllReviews);
router.post('/reviews/:businessId', ReviewController.createReview);
router.get('/reviews/:id', ReviewController.getReviewById);
router.put('/reviews/:id', ReviewController.updateReview);
router.delete('/reviews/:id', ReviewController.deleteReview);

export default router;
