import { Router } from 'express';
import ReviewController from '../../controllers/admin/Review.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/reviews/:id', ReviewController.getReviewById);
router.delete('/reviews/:id', ReviewController.deleteReview);
router.get('/reviews/customer/:customerId', ReviewController.getReviewsByCustomerId);
router.get('/reviews/business/:businessId', ReviewController.getReviewsByBusinessId);

export default router;
