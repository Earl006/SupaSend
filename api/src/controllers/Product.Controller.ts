import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/Product.Service';

class ProductController {

    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getProductById = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    createProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    updateProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getProductsByBusiness = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }

    getProductsByCategory = async (req: Request, res: Response, next: NextFunction) => {
        try {

        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new ProductController();
