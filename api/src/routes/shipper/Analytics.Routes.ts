import { Router } from 'express';
import AnalyticsController from '../../controllers/shipper/Analytics.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('SHIPPER'));

router.get('/analytics/deliveries', AnalyticsController.getDeliveryAnalytics);
router.get('/analytics/reviews', AnalyticsController.getReviewAnalytics);
router.get('/analytics/transactions', AnalyticsController.getTransactionAnalytics);
router.get('/analytics/wallets', AnalyticsController.getWalletAnalytics);

export default router;
