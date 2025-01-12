import { Request, Response, NextFunction } from 'express';
import { uploadToCloudinary } from '../utils/ImageUpload.Util';
import CustomerService from '../services/Customer.Service';

class CustomerController {

    private customerService: CustomerService;

    constructor() {
        this.customerService = new CustomerService();
    }

    getAllCustomers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const customers = await this.customerService.getAllCustomers();
            res.status(200).json(customers);
        } catch (error) {
            next(error);
        }
    };

    getCustomerById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: customerId } = req.params;
            const customer = await this.customerService.getCustomerById(customerId);
            res.status(200).json(customer);
        } catch (error) {
            next(error);
        }
    };

    createCustomer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const customerData = req.body;
            const newCustomer = await this.customerService.createCustomer(customerData);
            res.status(201).json(newCustomer);
        } catch (error) {
            next(error);
        }
    };

    updateCustomer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: customerId } = req.params;
            const customerData = req.body;
            const updatedCustomer = await this.customerService.updateCustomer(customerId, customerData);
            res.status(200).json(updatedCustomer);
        } catch (error) {
            next(error);
        }
    };

    deleteCustomer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: customerId } = req.params;
            await this.customerService.deleteCustomer(customerId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    };

    getCustomerProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const customerProfile = await this.customerService.getCustomerProfile(userId);
            res.status(200).json(customerProfile);
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
            res.status(200).json(updatedProfile);
        } catch (error) {
            next(error);
        }
    };
}

export default new CustomerController();
