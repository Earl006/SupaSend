import { Request, Response, NextFunction } from 'express';
import ProductService from '../../services/business/Product.Service';

class ProductController {

    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    getAllProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const products = await this.productService.getAllProducts(userId);
            res.status(200).json({
                success: true,
                message: 'Products retrieved successfully.',
                data: products
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const productData = req.body;
            const newProduct = await this.productService.createProduct(userId, productData);
            res.status(201).json({
                success: true,
                message: 'Product created successfully.',
                data: newProduct
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getProductById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: productId } = req.params;
            const product = await this.productService.getProductById(userId, productId);
            res.status(200).json({
                success: true,
                message: 'Product details retrieved successfully.',
                data: product
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    updateProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: productId } = req.params;
            const productData = req.body;
            const updatedProduct = await this.productService.updateProduct(userId, productId, productData);
            res.status(200).json({
                success: true,
                message: 'Product updated successfully.',
                data: updatedProduct
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: productId } = req.params;
            await this.productService.deleteProduct(userId, productId);
            res.status(200).json({
                success: true,
                message: 'Product deleted successfully.'
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new ProductController();
