import { Request, Response, NextFunction } from 'express';
import CategoryService from '../services/Category.Service';

class CategoryController {

    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService();
    }

    getAllCategories = async (req: Request, res: Response, next: NextFunction) => {

    }

    getCategoryById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createCategory = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateCategory = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new CategoryController();
