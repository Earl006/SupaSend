import { Router } from 'express';
import ReportController from '../../controllers/admin/Report.Controller';
import IsAuthenticated from '../../middleware/IsAuthenticated.Middleware';
import EnsureUserRole from '../../middleware/EnsureUserRole.Middleware';

const router = Router();

router.use(IsAuthenticated);
router.use(EnsureUserRole('ADMIN'));

router.get('/reports', ReportController.getAllReports);
router.get('/reports/:id', ReportController.getReportById);
router.delete('/reports/:id', ReportController.deleteReport);

export default router;
