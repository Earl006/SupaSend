import { Router } from 'express';
import ShipperController from '../../controllers/admin/Shipper.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/shippers', ShipperController.getAllShippers);
router.post('/shippers', ShipperController.createShipper);
router.get('/shippers/:id', ShipperController.getShipperById);
router.put('/shippers/:id', ShipperController.updateShipper);
router.delete('/shippers/:id', ShipperController.deleteShipper);
router.get('/shippers/zone/:zoneId', ShipperController.getShippersByZoneId);

export default router;
