import { Request, Response, NextFunction } from 'express';
import AddressService from '../../services/business/Address.Service';

class AddressController {

    private addressService: AddressService;

    constructor() {
        this.addressService = new AddressService();
    }

    getAllAddresses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const addresses = await this.addressService.getAllAddresses(userId);
            res.status(200).json({
                success: true,
                message: 'Addresses retrieved successfully.',
                data: addresses,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    createAddress = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const addressData = req.body;
            const newAddress = await this.addressService.createAddress(userId, addressData);
            res.status(201).json({
                success: true,
                message: 'Address created successfully.',
                data: newAddress,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    getAddressById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: addressId } = req.params;
            const address = await this.addressService.getAddressById(userId, addressId);
            res.status(200).json({
                success: true,
                message: 'Address details retrieved successfully.',
                data: address,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    updateAddress = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: addressId } = req.params;
            const addressData = req.body;
            const updatedAddress = await this.addressService.updateAddress(userId, addressId, addressData);
            res.status(200).json({
                success: true,
                message: `Address updated successfully.`,
                data: updatedAddress,
            });
        } catch (error: unknown) {
            next(error);
        }
    }

    deleteAddress = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId = req.user?.id as string;
            const { id: addressId } = req.params;
            await this.addressService.deleteAddress(userId, addressId);
            res.status(200).json({
                success: true,
                message: `Address deleted successfully.`,
            });
        } catch (error: unknown) {
            next(error);
        }
    }
}

export default new AddressController();
