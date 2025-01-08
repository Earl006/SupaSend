export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    stock: number;
    sales: number;
    sellerId: string;
    createdAt: Date;
    updatedAt: Date;
    status: 'active' | 'inactive' | 'draft';
    variants?: ProductVariant[];
    tags?: string[];
    discount: number;
}

export interface ProductVariant {
    id: string;
    name: string;
    price: number;
    stock: number;
    attributes: { [key: string]: string };
}

export interface ProductCategory {
    id: string;
    name: string;
    description?: string;
    imageUrl?: string;
    parentId?: string;
}
