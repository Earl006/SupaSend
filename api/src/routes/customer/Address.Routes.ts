import { Router } from 'express';
import AddressController from '../../controllers/customer/Address.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('CUSTOMER'));

router.get('/addresses', AddressController.getAllAddresses);
router.post('/addresses', AddressController.createAddress);
router.get('/addresses/:id', AddressController.getAddressById);
router.put('/addresses/:id', AddressController.updateAddress);
router.delete('/addresses/:id', AddressController.deleteAddress);

export default router;
