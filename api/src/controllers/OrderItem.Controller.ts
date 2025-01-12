import { Request, Response, NextFunction } from 'express';
import OrderItemService from '../services/OrderItem.Service';

class OrderItemController {

    private orderItemService: OrderItemService;

    constructor() {
        this.orderItemService = new OrderItemService();
    }

    getAllOrderItems = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const orderItems = await this.orderItemService.getAllOrderItems();
            res.status(200).json(orderItems);
        } catch (error) {
            next(error);
        }
    };

    getOrderItemById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: orderItemId } = req.params;
            const orderItem = await this.orderItemService.getOrderItemById(orderItemId);
            res.status(200).json(orderItem);
        } catch (error) {
            next(error);
        }
    };

    createOrderItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { orderId } = req.params;
            const orderItemData = req.body;
            const newOrderItem = await this.orderItemService.createOrderItem(orderId, orderItemData);
            res.status(201).json(newOrderItem);
        } catch (error) {
            next(error);
        }
    };

    updateOrderItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: orderItemId } = req.params;
            const orderItemData = req.body;
            const updatedOrderItem = await this.orderItemService.updateOrderItem(orderItemId, orderItemData);
            res.status(200).json(updatedOrderItem);
        } catch (error) {
            next(error);
        }
    };

    deleteOrderItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: orderItemId } = req.params;
            await this.orderItemService.deleteOrderItem(orderItemId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    getOrderItemsByOrderId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { orderId } = req.params;
            const orderItems = await this.orderItemService.getOrderItemsByOrderId(orderId);
            res.status(200).json(orderItems);
        } catch (error) {
            next(error);
        }
    };

    getOrderItemsForBusiness = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { businessId } = req.params;
            const orderItems = await this.orderItemService.getOrderItemsForBusiness(businessId);
            res.status(200).json(orderItems);
        } catch (error) {
            next(error);
        }
    };
}

export default new OrderItemController();
