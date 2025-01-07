import { Request, Response, NextFunction } from 'express';
import AddressService from '../services/Address.Service';

class AddressController {

    private addressService: AddressService;

    constructor() {
        this.addressService = new AddressService();
    }

    getAllAddresses = async (req: Request, res: Response, next: NextFunction) => {

    }

    getAddressById = async (req: Request, res: Response, next: NextFunction) => {

    }

    createAddress = async (req: Request, res: Response, next: NextFunction) => {

    }

    updateAddress = async (req: Request, res: Response, next: NextFunction) => {

    }

    deleteAddress = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getAddressesByUserId = async (req: Request, res: Response, next: NextFunction) => {
        
    }

    getAddressesByZoneId = async (req: Request, res: Response, next: NextFunction) => {
        
    }
}

export default new AddressController();
