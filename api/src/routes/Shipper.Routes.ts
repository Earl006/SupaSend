import { Router } from 'express';
import ShipperController from '../controllers/Shipper.Controller';

const router = Router();

router.post('/shippers', ShipperController.createShipper);

export default router;
