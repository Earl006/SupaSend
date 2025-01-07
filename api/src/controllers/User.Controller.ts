import { Request, Response, NextFunction } from 'express';
import UserService from '../services/User.Service';

class UserController {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    getAllUsers = async (req: Request, res: Response, next: NextFunction) => {

    }

    getUserById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createUser = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateUser = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getUsersByRole = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new UserController();
