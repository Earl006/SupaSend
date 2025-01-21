import { Request, Response, NextFunction } from 'express';
import CustomerService from '../../services/admin/Customer.Service';

class CustomerController {

    private customerService: CustomerService;

    constructor() {
        this.customerService = new CustomerService();
    }

    getAllCustomers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const customers = await this.customerService.getAllCustomers();
            res.status(200).json({
                success: true,
                message: 'Customers retrieved successfully.',
                data: customers,
            });
        } catch (error) {
            next(error);
        }
    };

    createCustomer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const customerData = req.body;
            const newCustomer = await this.customerService.createCustomer(customerData);
            res.status(201).json({
                success: true,
                message: 'Customer created successfully.',
                data: newCustomer,
            });
        } catch (error) {
            next(error);
        }
    };

    getCustomerById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: customerId } = req.params;
            const customer = await this.customerService.getCustomerById(customerId);
            res.status(200).json({
                success: true,
                message: 'Customer details retrieved successfully.',
                data: customer,
            });
        } catch (error) {
            next(error);
        }
    };

    updateCustomer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: customerId } = req.params;
            const customerData = req.body;
            const updatedCustomer = await this.customerService.updateCustomer(customerId, customerData);
            res.status(200).json({
                success: true,
                message: 'Customer updated successfully.',
                data: updatedCustomer,
            });
        } catch (error) {
            next(error);
        }
    };

    deleteCustomer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { id: customerId } = req.params;
            await this.customerService.deleteCustomer(customerId);
            res.status(200).json({
                success: true,
                message: 'Customer deleted successfully.',
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new CustomerController();
