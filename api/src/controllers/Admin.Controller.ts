import { Request, Response, NextFunction } from 'express';
import AdminService from '../services/Admin.Service';

class AdminController {

    private adminService: AdminService;

    constructor() {
        this.adminService = new AdminService();
    }

    getAllAdmins = async (req: Request, res: Response, next: NextFunction) => {

    }

    getAdminById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createAdmin = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateAdmin = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteAdmin = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getAdminProfile = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    updateAdminProfile = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getAdminsByLevel = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new AdminController();
