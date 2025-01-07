import { Router } from 'express';
import UserController from '../controllers/User.Controller';

const router = Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.get('/role/:role', UserController.getUsersByRole);

export default router;
