import { Router } from 'express';
import ZoneController from '../../controllers/admin/Zone.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/', ZoneController.getAllZones);
router.post('/', ZoneController.createZone);
router.get('/:id', ZoneController.getZoneById);
router.put('/:id', ZoneController.updateZone);
router.delete('/:id', ZoneController.deleteZone);

export default router;
