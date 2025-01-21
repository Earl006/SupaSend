import { Request, Response, NextFunction } from 'express';
import AddressService from '../services/Address.Service';

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
}

export default new AddressController();
