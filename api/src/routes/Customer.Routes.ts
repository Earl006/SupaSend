import { Router } from 'express';
import CustomerController from '../controllers/Customer.Controller';

const router = Router();

router.get('/profile', CustomerController.getCustomerProfile);
router.put('/profile', CustomerController.updateCustomerProfile);
router.get('/', CustomerController.getAllCustomers);
router.post('/', CustomerController.createCustomer);
router.get('/:id', CustomerController.getCustomerById);
router.put('/:id', CustomerController.updateCustomer);
router.delete('/:id', CustomerController.deleteCustomer);

export default router;
