import { Request, Response, NextFunction } from 'express';
import { uploadToCloudinary } from '../../utils/ImageUpload.Util';
import CustomerService from '../../services/customer/Customer.Service';

class CustomerController {

    private customerService: CustomerService;

    constructor() {
        this.customerService = new CustomerService();
    }

    getCustomerProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const customerProfile = await this.customerService.getCustomerProfile(userId);
            res.status(200).json({
                success: true,
                message: 'Customer profile retrieved successfully.',
                data: customerProfile,
            });
        } catch (error) {
            next(error);
        }
    };

    updateCustomerProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const customerData = req.body;

            if (req.file) {
                const imageUrl = await uploadToCloudinary(req.file);
                customerData.avatarUrl = imageUrl;
            }

            const updatedProfile = await this.customerService.updateCustomerProfile(userId, customerData);
            res.status(200).json({
                success: true,
                message: 'Customer profile updated successfully.',
                data: updatedProfile,
            });
        } catch (error) {
            next(error);
        }
    };

    deleteCustomerAccount = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            await this.customerService.deleteCustomerAccount(userId);
            res.status(200).json({
                success: true,
                message: 'Account deleted successfully.',
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new CustomerController();
