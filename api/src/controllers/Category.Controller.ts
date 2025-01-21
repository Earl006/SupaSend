import { Request, Response, NextFunction } from 'express';
import CategoryService from '../services/Category.Service';

class CategoryController {

    private categoryService: CategoryService;

    constructor() {
        this.categoryService = new CategoryService();
    }

    getAllCategories = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const categories = await this.categoryService.getAllCategories();
            res.status(200).json({
                success: true,
                message: 'Categories retrieved successfully.',
                data: categories,
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new CategoryController();
