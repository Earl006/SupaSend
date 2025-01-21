import { Router } from 'express';
import TransactionController from '../../controllers/shipper/Transaction.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('SHIPPER'));

router.get('/transactions', TransactionController.getAllTransactions);
router.get('/transactions/type', TransactionController.getTransactionsByType);
router.get('/transactions/status', TransactionController.getTransactionsByStatus);
router.get('/transactions/:id', TransactionController.getTransactionById);
router.get('/transactions/reference/:reference', TransactionController.getTransactionByReference);
router.delete('/transactions/:id', TransactionController.deleteTransaction);

export default router;
