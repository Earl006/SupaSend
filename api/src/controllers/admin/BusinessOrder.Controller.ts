import { Request, Response, NextFunction } from 'express';
import BusinessOrderService from '../../services/admin/BusinessOrder.Service';

class BusinessOrderController {

    private businessOrderService: BusinessOrderService;

    constructor() {
        this.businessOrderService = new BusinessOrderService();
    }

    getBusinessOrdersByBusinessId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { businessId } = req.params;
            const businessOrders = await this.businessOrderService.getBusinessOrdersByBusinessId(businessId);
            res.status(200).json({
                success: true,
                message: 'Business orders retrieved successfully.',
                data: businessOrders,
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new BusinessOrderController();
