import { Router } from 'express';
import TransactionController from '../../controllers/admin/Transaction.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/transactions/wallet/:walletId/type', TransactionController.getTransactionsByType);
router.get('/transactions/wallet/:walletId/status', TransactionController.getTransactionsByStatus);
router.get('/transactions/reference/:reference', TransactionController.getTransactionByReference);
router.get('/transactions/wallet/:walletId', TransactionController.getTransactionsByWalletId);

export default router;
