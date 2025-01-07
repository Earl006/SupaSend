import { Router } from 'express';
import AdminController from '../controllers/Admin.Controller';

const router = Router();

router.get('/profile', AdminController.getAdminProfile);
router.put('/profile', AdminController.updateAdminProfile);
router.get('/', AdminController.getAllAdmins);
router.post('/', AdminController.createAdmin);
router.get('/:id', AdminController.getAdminById);
router.put('/:id', AdminController.updateAdmin);
router.delete('/:id', AdminController.deleteAdmin);
router.get('/level/:level', AdminController.getAdminsByLevel);

export default router;
