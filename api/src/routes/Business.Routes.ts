import { Router } from 'express';
import BusinessController from '../controllers/Business.Controller';

const router = Router();

router.get('/businesses', BusinessController.getAllBusinesses);
router.post('/businesses', BusinessController.createBusiness);
router.get('/businesses/:id', BusinessController.getBusinessById);
router.get('/businesses/owner/:ownerId', BusinessController.getBusinessesByOwnerId);

export default router;
