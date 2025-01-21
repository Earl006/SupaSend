import { Router } from 'express';
import AnalyticsController from '../../controllers/business/Analytics.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('BUSINESS'));

router.get('/analytics/business-orders', AnalyticsController.getBusinessOrderAnalytics);
router.get('/analytics/order-items', AnalyticsController.getOrderItemAnalytics);
router.get('/analytics/products', AnalyticsController.getProductAnalytics);
router.get('/analytics/reviews', AnalyticsController.getReviewAnalytics);
router.get('/analytics/transactions', AnalyticsController.getTransactionAnalytics);
router.get('/analytics/wallets', AnalyticsController.getWalletAnalytics);

export default router;
