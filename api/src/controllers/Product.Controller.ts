import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/Product.Service';

class ProductController {

    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    getAllProducts = async (req: Request, res: Response, next: NextFunction) => {

    }

    getProductById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createProduct = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateProduct = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getProductsByBusiness = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getProductsByCategory = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new ProductController();
