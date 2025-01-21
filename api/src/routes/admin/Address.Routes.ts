import { Router } from 'express';
import AddressController from '../../controllers/admin/Address.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/addresses/business/:businessId', AddressController.getAddressesByBusinessId);
router.get('/addresses/customer/:customerId', AddressController.getAddressesByCustomerId);
router.get('/addresses/zone/:zoneId', AddressController.getAddressesByZoneId);

export default router;
