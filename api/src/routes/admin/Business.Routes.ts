import { Router } from 'express';
import BusinessController from '../../controllers/admin/Business.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/businesses', BusinessController.getAllBusinesses);
router.post('/businesses', BusinessController.createBusiness);
router.get('/businesses/:id', BusinessController.getBusinessById);
router.put('/businesses/:id', BusinessController.updateBusiness);
router.delete('/businesses/:id', BusinessController.deleteBusiness);
router.get('/owner/:ownerId', BusinessController.getBusinessesByOwnerId);

export default router;
