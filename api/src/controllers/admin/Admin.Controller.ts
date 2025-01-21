import { Request, Response, NextFunction } from 'express';
import AdminService from '../../services/admin/Admin.Service';

class AdminController {

    private adminService: AdminService;

    constructor() {
        this.adminService = new AdminService();
    }

    getAdminProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const adminProfile = await this.adminService.getAdminProfile(userId);
            res.status(200).json({
                success: true,
                message: 'Admin profile retrieved successfully.',
                data: adminProfile,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    updateAdminProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const adminData = req.body;
            const updatedAdminProfile = await this.adminService.updateAdminProfile(userId, adminData);
            res.status(200).json({
                success: true,
                message: 'Admin profile updated successfully.',
                data: updatedAdminProfile,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getAllAdmins = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const admins = await this.adminService.getAllAdmins();
            res.status(200).json({
                success: true,
                message: 'Admins retrieved successfully.',
                data: admins,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    createAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const adminData = req.body;
            const newAdmin = await this.adminService.createAdmin(userId, adminData);
            res.status(201).json({
                success: true,
                message: 'Admin created successfully.',
                data: newAdmin,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: adminId } = req.params;
            const admin = await this.adminService.getAdminById(adminId);
            res.status(200).json({
                success: true,
                message: 'Admin details retrieved successfully.',
                data: admin,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    updateAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: targetAdminId } = req.params;
            const targetAdminData = req.body;
            const updatedAdmin = await this.adminService.updateAdmin(userId, targetAdminId, targetAdminData);
            res.status(200).json({
                success: true,
                message: 'Admin updated successfully.',
                data: updatedAdmin,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: targetAdminId } = req.params;
            await this.adminService.deleteAdmin(userId, targetAdminId);
            res.status(200).json({
                success: true,
                message: `Admin deleted successfully.`,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminsByLevel = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { level } = req.params;
            const admins = await this.adminService.getAdminsByLevel(level);
            res.status(200).json({
                success: true,
                message: `Level ${level} admins retrieved successfully.`,
                data: admins,
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new AdminController();
