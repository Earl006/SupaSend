import { Router } from 'express';
import WalletController from '../../controllers/admin/Wallet.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/wallets', WalletController.getAllWallets);
router.put('/wallets/:id/activate', WalletController.activateWallet);
router.put('/wallets/:id/deactivate', WalletController.deactivateWallet);
router.get('/wallets/:id', WalletController.getWalletById);
router.get('/wallets/user/:userId', WalletController.getWalletByUserId);

export default router;
