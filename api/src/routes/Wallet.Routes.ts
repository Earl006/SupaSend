import { Router } from 'express';
import WalletController from '../controllers/Wallet.Controller';

const router = Router();

router.get('/', WalletController.getAllWallets);
router.post('/', WalletController.createWallet);
router.get('/:id', WalletController.getWalletById);
router.put('/:id', WalletController.updateWallet);
router.delete('/:id', WalletController.deleteWallet);
router.get('/user/:userId', WalletController.getWalletByUserId);
router.put('/:id/activate', WalletController.activateWallet);
router.put('/:id/deactivate', WalletController.deactivateWallet);

export default router;
