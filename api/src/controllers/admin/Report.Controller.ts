import { Request, Response, NextFunction } from 'express';
import ReportService from '../../services/admin/Report.Service';

class ReportController {

    private reportService: ReportService;

    constructor() {
        this.reportService = new ReportService();
    }

    getAllReports = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const report = await this.reportService.getAllReports();
            res.status(200).json({
                success: true,
                message: 'Reports retrieved successfully.',
                data: report
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getReportById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: reportId } = req.params;
            const report = await this.reportService.getReportById(reportId);
            res.status(200).json({
                success: true,
                message: 'Report details retrieved successfully.',
                data: report
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteReport = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: reportId } = req.params;
            await this.reportService.deleteReport(reportId);
            res.status(200).json({
                success: true,
                message: 'Report deleted successfully.'
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new ReportController();
