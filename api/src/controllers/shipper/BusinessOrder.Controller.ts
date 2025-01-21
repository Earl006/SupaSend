import { Request, Response, NextFunction } from 'express';
import BusinessOrderService from '../../services/shipper/BusinessOrder.Service';

class ShipperBusinessOrderController {
    private businessOrderService: BusinessOrderService;

    constructor() {
        this.businessOrderService = new BusinessOrderService();
    }

    confirmPickup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: businessOrderId } = req.params;
            await this.businessOrderService.confirmPickup(userId, businessOrderId);
            res.status(200).json({
                success: true,
                message: 'Pickup confirmed successfully.',
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new ShipperBusinessOrderController();
