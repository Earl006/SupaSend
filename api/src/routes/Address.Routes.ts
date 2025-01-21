import { Router } from 'express';
import AddressController from '../controllers/Address.Controller';

const router = Router();

router.get('/addresses/business/:businessId', AddressController.getAddressesByBusinessId);

export default router;
