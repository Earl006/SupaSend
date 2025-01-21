import { Router } from 'express';
import AdminController from '../../controllers/admin/Admin.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/admins/profile', AdminController.getAdminProfile);
router.put('/admins/profile', AdminController.updateAdminProfile);
router.get('/admins', AdminController.getAllAdmins);
router.post('/admins', AdminController.createAdmin);
router.get('/admins/:id', AdminController.getAdminById);
router.put('/admins/:id', AdminController.updateAdmin);
router.delete('/admins/:id', AdminController.deleteAdmin);
router.get('/admins/level/:level', AdminController.getAdminsByLevel);

export default router;
