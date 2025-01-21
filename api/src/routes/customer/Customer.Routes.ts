import { Router } from 'express';
import CustomerController from '../../controllers/customer/Customer.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('CUSTOMER'));

router.get('/profile', CustomerController.getCustomerProfile);
router.put('/profile', CustomerController.updateCustomerProfile);
router.delete('/delete-account', CustomerController.deleteCustomerAccount);

export default router;
