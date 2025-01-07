import { Router } from 'express';
import ZoneController from '../controllers/Zone.Controller';

const router = Router();

router.get('/', ZoneController.getAllZones);
router.post('/', ZoneController.createZone);
router.get('/:id', ZoneController.getZoneById);
router.put('/:id', ZoneController.updateZone);
router.delete('/:id', ZoneController.deleteZone);

export default router;
