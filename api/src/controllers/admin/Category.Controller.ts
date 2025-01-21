import { Request, Response, NextFunction } from 'express';
import CategoryService from '../../services/admin/Category.Service';

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

    createCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const categoryData = req.body;
            const newCategory = await this.categoryService.createCategory(categoryData);
            res.status(201).json({
                success: true,
                message: 'Category created successfully.',
                data: newCategory,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getCategoryById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: categoryId } = req.params;
            const category = await this.categoryService.getCategoryById(categoryId);
            res.status(200).json({
                success: true,
                message: 'Category details retrieved successfully.',
                data: category,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    updateCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: categoryId } = req.params;
            const categoryData = req.body;
            const updatedCategory = await this.categoryService.updateCategory(categoryId, categoryData);
            res.status(200).json({
                success: true,
                message: 'Category updated successfully.',
                data: updatedCategory,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: categoryId } = req.params;
            await this.categoryService.deleteCategory(categoryId);
            res.status(200).json({
                success: true,
                message: 'Category deleted successfully.',
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new CategoryController();
