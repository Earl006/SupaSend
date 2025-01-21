import { Router } from 'express';
import ShipperController from '../../controllers/shipper/Shipper.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('SHIPPER'));

router.get('/profile', ShipperController.getShipperProfile);
router.put('/profile', ShipperController.updateShipperProfile);
router.delete('/delete-account', ShipperController.deleteShipper);

export default router;
