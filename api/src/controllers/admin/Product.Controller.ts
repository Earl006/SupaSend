import { Request, Response, NextFunction } from 'express';
import ProductService from '../../services/admin/Product.Service';

class ProductController {

    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
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

    deleteProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: productId } = req.params;
            await this.productService.deleteProduct(productId);
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
