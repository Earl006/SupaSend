import { Router } from 'express';
import TransactionController from '../controllers/Transaction.Controller';

const router = Router();

router.get('/', TransactionController.getAllTransactions);
// router.post('/', TransactionController.createTransaction);
router.get('/:id', TransactionController.getTransactionById);
router.put('/:id', TransactionController.updateTransaction);
router.delete('/:id', TransactionController.deleteTransaction);
router.get('/wallet/:walletId', TransactionController.getTransactionsByWalletId);
router.get('/type/:type', TransactionController.getTransactionsByType);
router.get('/status/:status', TransactionController.getTransactionsByStatus);

export default router;
