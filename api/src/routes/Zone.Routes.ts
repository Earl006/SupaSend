import { Router } from 'express';
import ZoneController from '../controllers/Zone.Controller';

const router = Router();

router.get('/zones', ZoneController.getAllZones);

export default router;
