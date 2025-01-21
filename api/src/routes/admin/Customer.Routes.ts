import { Router } from 'express';
import CustomerController from '../../controllers/admin/Customer.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/customers', CustomerController.getAllCustomers);
router.post('/customers', CustomerController.createCustomer);
router.get('/customers/:id', CustomerController.getCustomerById);
router.put('/customers/:id', CustomerController.updateCustomer);
router.delete('/customers/:id', CustomerController.deleteCustomer);

export default router;
