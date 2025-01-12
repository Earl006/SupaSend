import { Request, Response, NextFunction } from 'express';
import AddressService from '../services/Address.Service';

class AddressController {

    private addressService: AddressService;

    constructor() {
        this.addressService = new AddressService();
    }

    getAllAddresses = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const addresses = await this.addressService.getAllAddresses();
            res.status(200).json(addresses);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAddressById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id: addressId } = req.params;
            const address = await this.addressService.getAddressById(addressId);
            res.status(200).json(address);
        } catch (error: unknown) {
            next(error);
        }
    }

    createAddress = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const newAddress = await this.addressService.createAddress(req.body);
            res.status(201).json(newAddress);
        } catch (error: unknown) {
            next(error);
        }
    }

    updateAddress = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id: addressId } = req.params;
            const updatedAddress = await this.addressService.updateAddress(addressId, req.body);
            res.status(200).json(updatedAddress);
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteAddress = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id: addressId } = req.params;
            await this.addressService.deleteAddress(addressId);
            res.status(204).send();
        } catch (error: unknown) {
            next(error);
        }
    }

    getAddressesByUserId = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { userId } = req.params;
            const addresses = await this.addressService.getAddressesByUserId(userId);
            res.status(200).json(addresses);
        } catch (error: unknown) {
            next(error);
        }
    }

    getAddressesByZoneId = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { zoneId } = req.params;
            const addresses = await this.addressService.getAddressesByZoneId(zoneId);
            res.status(200).json(addresses);
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new AddressController();
