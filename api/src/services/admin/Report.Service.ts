import prisma from '../../config/Prisma.Config';
import { Report } from '@prisma/client';

class ReportService {
    async getAllReports() {
        throw new Error('Method not implemented.');
    }
    async getReportById(reportId: string) {
        throw new Error('Method not implemented.');
    }
    async deleteReport(reportId: string) {
        throw new Error('Method not implemented.');
    }
}

export default ReportService;
