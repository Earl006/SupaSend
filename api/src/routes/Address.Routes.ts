import { Router } from 'express';
import AddressController from '../controllers/Address.Controller';

const router = Router();

router.get('/', AddressController.getAllAddresses);
router.post('/', AddressController.createAddress);
router.get('/:id', AddressController.getAddressById);
router.put('/:id', AddressController.updateAddress);
router.delete('/:id', AddressController.deleteAddress);
router.get('/user/:userId', AddressController.getAddressesByUserId);
router.get('/zone/:zoneId', AddressController.getAddressesByZoneId);

export default router;
