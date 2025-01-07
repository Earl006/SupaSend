import { Router } from 'express';
import BusinessController from '../controllers/Business.Controller';

const router = Router();

router.get('/profile', BusinessController.getBusinessProfile);
router.put('/profile', BusinessController.updateBusinessProfile);
router.get('/', BusinessController.getAllBusinesses);
router.post('/', BusinessController.createBusiness);
router.get('/:id', BusinessController.getBusinessById);
router.put('/:id', BusinessController.updateBusiness);
router.delete('/:id', BusinessController.deleteBusiness);
router.get('/owner/:ownerId', BusinessController.getBusinessesByOwnerId);

export default router;
