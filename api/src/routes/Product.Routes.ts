import { Router } from 'express';
import ProductController from '../controllers/Product.Controller';

const router = Router();

router.get('/products', ProductController.getAllProducts);
router.get('/products/:id', ProductController.getProductById);
router.get('/products/business/:businessId', ProductController.getProductsByBusinessId);
router.get('/products/category/:categoryId', ProductController.getProductsByCategoryId);

export default router;
