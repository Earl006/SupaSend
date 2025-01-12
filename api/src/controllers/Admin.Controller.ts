import { Request, Response, NextFunction } from 'express';
import AdminService from '../services/Admin.Service';

class AdminController {

    private adminService: AdminService;

    constructor() {
        this.adminService = new AdminService();
    }

    getAllAdmins = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const admins = await this.adminService.getAllAdmins();
            res.status(200).json(admins);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id: adminId } = req.params;
            const admin = await this.adminService.getAdminById(adminId);
            res.status(200).json(admin);
        } catch (error: unknown) {
            next(error);
        }
    }

    createAdmin = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.id as string;
            const newAdmin = await this.adminService.createAdmin(userId, req.body);
            res.status(201).json(newAdmin);
        } catch (error: unknown) {
            next(error);
        }
    }

    updateAdmin = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.id as string;
            const { id: targetAdminId } = req.params;
            const updatedAdmin = await this.adminService.updateAdmin(userId, targetAdminId, req.body);
            res.status(200).json(updatedAdmin);
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteAdmin = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.id as string;
            const { id: targetAdminId } = req.params;
            await this.adminService.deleteAdmin(userId, targetAdminId);
            res.status(204).send();
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminProfile = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.id as string;
            const adminProfile = await this.adminService.getAdminProfile(userId);
            res.status(200).json(adminProfile);
        } catch (error: unknown) {
            next(error);
        }
    }

    updateAdminProfile = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.id as string;
            const updatedAdminProfile = await this.adminService.updateAdminProfile(userId, req.body);
            res.status(200).json(updatedAdminProfile);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAdminsByLevel = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { level } = req.params;
            const admins = await this.adminService.getAdminsByLevel(level);
            res.status(200).json(admins);
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new AdminController();
