import { Router } from 'express';
import ProductController from '../controllers/Product.Controller';

const router = Router();

router.get('/', ProductController.getAllProducts);
router.post('/', ProductController.createProduct);
router.get('/:id', ProductController.getProductById);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);
router.get('/business/:businessId', ProductController.getProductsByBusinessId);
router.get('/category/:categoryId', ProductController.getProductsByCategoryId);

export default router;
