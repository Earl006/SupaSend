import { Router } from 'express';
import AnalyticsController from '../../controllers/admin/Analytics.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/analytics/addresses', AnalyticsController.getAddressAnalytics);
router.get('/analytics/admins', AnalyticsController.getAdminAnalytics);
router.get('/analytics/businesses', AnalyticsController.getBusinessAnalytics);
router.get('/analytics/business-orders', AnalyticsController.getBusinessOrderAnalytics);
router.get('/analytics/carts', AnalyticsController.getCartAnalytics);
router.get('/analytics/cart-items', AnalyticsController.getCartItemAnalytics);
router.get('/analytics/categories', AnalyticsController.getCategoryAnalytics);
router.get('/analytics/customers', AnalyticsController.getCustomerAnalytics);
router.get('/analytics/deliveries', AnalyticsController.getDeliveryAnalytics);
router.get('/analytics/orders', AnalyticsController.getOrderAnalytics);
router.get('/analytics/order-items', AnalyticsController.getOrderItemAnalytics);
router.get('/analytics/payments', AnalyticsController.getPaymentAnalytics);
router.get('/analytics/payment-methods', AnalyticsController.getPaymentMethodAnalytics);
router.get('/analytics/products', AnalyticsController.getProductAnalytics);
router.get('/analytics/reviews', AnalyticsController.getReviewAnalytics);
router.get('/analytics/shippers', AnalyticsController.getShipperAnalytics);
router.get('/analytics/transactions', AnalyticsController.getTransactionAnalytics);
router.get('/analytics/users', AnalyticsController.getUserAnalytics);
router.get('/analytics/wallets', AnalyticsController.getWalletAnalytics);
router.get('/analytics/zones', AnalyticsController.getZoneAnalytics);

export default router;
