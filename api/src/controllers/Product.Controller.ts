import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/Product.Service';

class ProductController {

    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const products = await this.productService.getAllProducts();
            res.status(200).json(products);
        } catch (error: unknown) {
            next(error);
        }
    }

    getProductById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const productId = req.params.id;
            const product = await this.productService.getProductById(productId);
            res.status(200).json(product);
        } catch (error: unknown) {
            next(error);
        }
    }

    createProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user?.id as string;
            const newProduct = await this.productService.createProduct(userId, req.body);
            res.status(201).json(newProduct);
        } catch (error: unknown) {
            next(error);
        }
    }

    updateProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const productId = req.params.id;
            const updatedProduct = await this.productService.updateProduct(productId, req.body);
            res.status(200).json(updatedProduct);
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const productId = req.params.id;
            await this.productService.deleteProduct(productId);
            res.status(204).send();
        } catch (error: unknown) {
            next(error);
        }
    }

    getProductsByBusinessId = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const businessId = req.params.businessId;
            const products = await this.productService.getProductsByBusinessId(businessId);
            res.status(200).json(products);
        } catch (error: unknown) {
            next(error);
        }
    }

    getProductsByCategoryId = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const categoryId = req.params.categoryId;
            const products = await this.productService.getProductsByCategoryId(categoryId);
            res.status(200).json(products);
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new ProductController();
