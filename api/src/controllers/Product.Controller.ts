import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/Product.Service';

class ProductController {

    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    getAllProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const products = await this.productService.getAllProducts();
            res.status(200).json({
                success: true,
                message: 'Products retrieved successfully.',
                data: products
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: productId } = req.params;
            const product = await this.productService.getProductById(productId);
            res.status(200).json({
                success: true,
                message: 'Product details retrieved successfully.',
                data: product
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getProductsByBusinessId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { businessId } = req.params;
            const products = await this.productService.getProductsByBusinessId(businessId);
            res.status(200).json({
                success: true,
                message: 'Business products retrieved successfully.',
                data: products
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getProductsByCategoryId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { categoryId } = req.params;
            const products = await this.productService.getProductsByCategoryId(categoryId);
            res.status(200).json({
                success: true,
                message: 'Category products retrieved successfully.',
                data: products
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new ProductController();
