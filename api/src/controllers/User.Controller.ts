import { Request, Response, NextFunction } from 'express';
import UserService from '../services/User.Service';

class UserController {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users);
        } catch (error: unknown) {
            next(error);
        }
    };

    getUserById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.params.id;
            const user = await this.userService.getUserById(userId);
            res.status(200).json(user);
        } catch (error: unknown) {
            next(error);
        }
    };

    createUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newUser = await this.userService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error: unknown) {
            next(error);
        }
    };

    updateUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.params.id;
            const updatedUser = await this.userService.updateUser(userId, req.body);
            res.status(200).json(updatedUser);
        } catch (error: unknown) {
            next(error);
        }
    };

    deleteUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.params.id;
            await this.userService.deleteUser(userId);
            res.status(204).send();
        } catch (error: unknown) {
            next(error);
        }
    };

    getUsersByRole = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const role = req.params.role;
            const users = await this.userService.getUsersByRole(role);
            res.status(200).json(users);
        } catch (error: unknown) {
            next(error);
        }
    };
}

export default new UserController();
