import { Router } from 'express';
import ShipperController from '../controllers/Shipper.Controller';

const router = Router();

router.get('/profile', ShipperController.getShipperProfile);
router.put('/profile', ShipperController.updateShipperProfile);
router.get('/', ShipperController.getAllShippers);
router.post('/', ShipperController.createShipper);
router.get('/:id', ShipperController.getShipperById);
router.put('/:id', ShipperController.updateShipper);
router.delete('/:id', ShipperController.deleteShipper);
router.get('/zone/:zoneId', ShipperController.getShippersByZoneId);

export default router;
