import { Router } from 'express';
import AnalyticsController from '../controllers/Analytics.Controller';

const router = Router();

// Admin analytics routes
router.get('/admin/addresses', AnalyticsController.getAdminAddressAnalytics);
router.get('/admin/admins', AnalyticsController.getAdminAdminAnalytics);
router.get('/admin/businesses', AnalyticsController.getAdminBusinessAnalytics);
router.get('/admin/business-orders', AnalyticsController.getAdminBusinessOrderAnalytics);
router.get('/admin/carts', AnalyticsController.getAdminCartAnalytics);
router.get('/admin/cart-items', AnalyticsController.getAdminCartItemAnalytics);
router.get('/admin/categories', AnalyticsController.getAdminCategoryAnalytics);
router.get('/admin/customers', AnalyticsController.getAdminCustomerAnalytics);
router.get('/admin/deliveries', AnalyticsController.getAdminDeliveryAnalytics);
router.get('/admin/orders', AnalyticsController.getAdminOrderAnalytics);
router.get('/admin/order-items', AnalyticsController.getAdminOrderItemAnalytics);
router.get('/admin/payments', AnalyticsController.getAdminPaymentAnalytics);
router.get('/admin/payment-methods', AnalyticsController.getAdminPaymentMethodAnalytics);
router.get('/admin/products', AnalyticsController.getAdminProductAnalytics);
router.get('/admin/reviews', AnalyticsController.getAdminReviewAnalytics);
router.get('/admin/shippers', AnalyticsController.getAdminShipperAnalytics);
router.get('/admin/transactions', AnalyticsController.getAdminTransactionAnalytics);
router.get('/admin/wallets', AnalyticsController.getAdminWalletAnalytics);
router.get('/admin/zones', AnalyticsController.getAdminZoneAnalytics);
router.get('/admin/users', AnalyticsController.getAdminUserAnalytics);

// Business analytics routes
router.get('/business/business-orders', AnalyticsController.getBusinessBusinessOrderAnalytics);
router.get('/business/order-items', AnalyticsController.getBusinessOrderItemAnalytics);
router.get('/business/products', AnalyticsController.getBusinessProductAnalytics);
router.get('/business/reviews', AnalyticsController.getBusinessReviewAnalytics);
router.get('/business/transactions', AnalyticsController.getBusinessTransactionAnalytics);
router.get('/business/wallets', AnalyticsController.getBusinessWalletAnalytics);

// Customer analytics routes
router.get('/customer/carts', AnalyticsController.getCustomerCartAnalytics);
router.get('/customer/cart-items', AnalyticsController.getCustomerCartItemAnalytics);
router.get('/customer/orders', AnalyticsController.getCustomerOrderAnalytics);
router.get('/customer/order-items', AnalyticsController.getCustomerOrderItemAnalytics);
router.get('/customer/payments', AnalyticsController.getCustomerPaymentAnalytics);
router.get('/customer/reviews', AnalyticsController.getCustomerReviewAnalytics);
router.get('/customer/transactions', AnalyticsController.getCustomerTransactionAnalytics);
router.get('/customer/wallets', AnalyticsController.getCustomerWalletAnalytics);

// Shipper analytics routes
router.get('/shipper/deliveries', AnalyticsController.getShipperDeliveryAnalytics);
router.get('/shipper/transactions', AnalyticsController.getShipperTransactionAnalytics);
router.get('/shipper/wallets', AnalyticsController.getShipperWalletAnalytics);

export default router;
