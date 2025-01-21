import { Router } from 'express';
import WalletController from '../../controllers/customer/Wallet.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('CUSTOMER'));

router.get('/wallets', WalletController.getMyWallet);
router.post('/wallets/deposit', WalletController.depositFunds);
router.post('/wallets/withdraw', WalletController.withdrawFunds);
router.post('/wallets/transfer', WalletController.transferFunds);

export default router;
