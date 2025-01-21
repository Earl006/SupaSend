import { Router } from 'express';
import AnalyticsController from '../../controllers/customer/Analytics.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('CUSTOMER'));

router.get('/analytics/carts', AnalyticsController.getCartAnalytics);
router.get('/analytics/cart-items', AnalyticsController.getCartItemAnalytics);
router.get('/analytics/orders', AnalyticsController.getOrderAnalytics);
router.get('/analytics/order-items', AnalyticsController.getOrderItemAnalytics);
router.get('/analytics/payments', AnalyticsController.getPaymentAnalytics);
router.get('/analytics/reviews', AnalyticsController.getReviewAnalytics);
router.get('/analytics/transactions', AnalyticsController.getTransactionAnalytics);
router.get('/analytics/wallets', AnalyticsController.getWalletAnalytics);

export default router;
