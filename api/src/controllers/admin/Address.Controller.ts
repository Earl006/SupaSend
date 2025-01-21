import { Request, Response, NextFunction } from 'express';
import AddressService from '../../services/admin/Address.Service';

class AddressController {

    private addressService: AddressService;

    constructor() {
        this.addressService = new AddressService();
    }

    getAddressesByBusinessId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { businessId } = req.params;
            const addresses = await this.addressService.getAddressesByBusinessId(businessId);
            res.status(200).json({
                success: true,
                message: 'Business addresses retrieved successfully.',
                data: addresses,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getAddressesByCustomerId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { customerId } = req.params;
            const addresses = await this.addressService.getAddressesByCustomerId(customerId);
            res.status(200).json({
                success: true,
                message: 'Customer addresses retrieved successfully.',
                data: addresses,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getAddressesByZoneId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { zoneId } = req.params;
            const addresses = await this.addressService.getAddressesByZoneId(zoneId);
            res.status(200).json({
                success: true,
                message: 'Zone addresses retrieved successfully.',
                data: addresses,
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new AddressController();
