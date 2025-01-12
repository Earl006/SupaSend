import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/Order.Service';

class OrderController {
    
    private orderService: OrderService;

    constructor() {
        this.orderService = new OrderService();
    }

    getAllOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const orders = await this.orderService.getAllOrders();
            res.status(200).json(orders);
        } catch (error) {
            next(error);
        }
    };

    getOrderById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: orderId } = req.params;
            const order = await this.orderService.getOrderById(orderId);
            res.status(200).json(order);
        } catch (error) {
            next(error);
        }
    };

    createOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { cartId } = req.params;
            const newOrder = await this.orderService.createOrder(cartId, userId);
            res.status(201).json(newOrder);
        } catch (error) {
            next(error);
        }
    };

    updateOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: orderId } = req.params;
            const orderData = req.body;
            const updatedOrder = await this.orderService.updateOrder(orderId, orderData);
            res.status(200).json(updatedOrder);
        } catch (error) {
            next(error);
        }
    };

    deleteOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: orderId } = req.params;
            await this.orderService.deleteOrder(orderId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    getOrdersByCustomerId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { customerId } = req.params;
            const orders = await this.orderService.getOrdersByCustomerId(customerId);
            res.status(200).json(orders);
        } catch (error) {
            next(error);
        }
    };

    getOrdersByStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { status } = req.query;
            const orders = await this.orderService.getOrdersByStatus(status as string);
            res.status(200).json(orders);
        } catch (error) {
            next(error);
        }
    };

    updateOrderStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: orderId } = req.params;
            const { status } = req.body;
            const updatedOrder = await this.orderService.updateOrderStatus(orderId, status);
            res.status(200).json(updatedOrder);
        } catch (error) {
            next(error);
        }
    };

    checkoutOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: orderId } = req.params;
            const paymentDetails = req.body;
            const checkedOutOrder = await this.orderService.checkoutOrder(orderId, paymentDetails);
            res.status(200).json(checkedOutOrder);
        } catch (error) {
            next(error);
        }
    };
}

export default new OrderController();
