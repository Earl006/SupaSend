import { Router } from 'express';
import BusinessController from '../../controllers/business/Business.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('BUSINESS'));

router.get('/profile', BusinessController.getBusinessOwnerProfile);
router.put('/profile', BusinessController.updateBusinessOwnerProfile);
router.delete('/delete-account', BusinessController.deleteBusinessAccount);
router.get('/businesses', BusinessController.getAllBusinesses);
router.post('/businesses', BusinessController.createBusiness);
router.get('/businesses/:id', BusinessController.getBusinessById);
router.put('/businesses/:id', BusinessController.updateBusiness);
router.delete('/businesses/:id', BusinessController.deleteBusiness);

export default router;
