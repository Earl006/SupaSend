import { Request, Response, NextFunction } from 'express';
import CategoryService from '../services/Category.Service';

class CategoryController {

    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService();
    }

    getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categories = await this.categoryService.getAllCategories();
            res.status(200).json(categories);
        } catch (error: unknown) {
            next(error);
        }
    }

    getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryId = req.params.id;
            const category = await this.categoryService.getCategoryById(categoryId);
            res.status(200).json(category);
        } catch (error: unknown) {
            next(error);
        }
    }

    createCategory = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newCategory = await this.categoryService.createCategory(req.body);
            res.status(201).json(newCategory);
        } catch (error: unknown) {
            next(error);
        }
    }

    updateCategory = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryId = req.params.id;
            const updatedCategory = await this.categoryService.updateCategory(categoryId, req.body);
            res.status(200).json(updatedCategory);
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryId = req.params.id;
            await this.categoryService.deleteCategory(categoryId);
            res.status(204).send();
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new CategoryController();
