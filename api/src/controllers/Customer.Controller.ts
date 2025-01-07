import { Request, Response, NextFunction } from 'express';
import CustomerService from '../services/Customer.Service';

class CustomerController {

    private customerService: CustomerService;

    constructor() {
        this.customerService = new CustomerService();
    }

    getAllCustomers = async (req: Request, res: Response, next: NextFunction) => {

    }

    getCustomerById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createCustomer = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateCustomer = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getCustomerProfile = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    updateCustomerProfile = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new CustomerController();
