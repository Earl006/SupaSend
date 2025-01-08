import { Injectable } from '@angular/core';
import { Product, ProductCategory } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private mockCategories: ProductCategory[] = [
    { id: '1', name: 'Electronics', description: 'Electronic devices and accessories' },
    { id: '2', name: 'Fashion', description: 'Clothing, shoes, and accessories' },
    { id: '3', name: 'Home & Living', description: 'Furniture and home decor' },
    { id: '4', name: 'Beauty', description: 'Cosmetics and personal care' },
    { id: '5', name: 'Sports', description: 'Sports equipment and accessories' }
  ];

  private mockProducts: Product[] = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
      price: 24999,
      category: 'Electronics',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      stock: 15,
      sales: 127,
      sellerId: '1',
      createdAt: new Date('2024-12-01'),
      updatedAt: new Date('2024-12-01'),
      status: 'active'
    },
    {
      id: '2',
      name: 'Designer Leather Jacket',
      description: 'Premium leather jacket with modern design and comfortable fit.',
      price: 89999,
      category: 'Fashion',
      imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
      stock: 5,
      sales: 43,
      sellerId: '1',
      createdAt: new Date('2024-12-02'),
      updatedAt: new Date('2024-12-02'),
      status: 'active'
    },
    {
      id: '3',
      name: 'Modern Coffee Table',
      description: 'Elegant coffee table with minimalist design, perfect for any living room.',
      price: 34999,
      category: 'Home & Living',
      imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500',
      stock: 0,
      sales: 19,
      sellerId: '1',
      createdAt: new Date('2024-12-03'),
      updatedAt: new Date('2024-12-03'),
      status: 'active'
    },
    {
      id: '4',
      name: 'Luxury Skincare Set',
      description: 'Complete skincare routine with premium ingredients.',
      price: 12999,
      category: 'Beauty',
      imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500',
      stock: 8,
      sales: 256,
      sellerId: '1',
      createdAt: new Date('2024-12-04'),
      updatedAt: new Date('2024-12-04'),
      status: 'active'
    },
    {
      id: '5',
      name: 'Professional Yoga Mat',
      description: 'High-density yoga mat with perfect grip and comfort.',
      price: 4999,
      category: 'Sports',
      imageUrl: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
      stock: 3,
      sales: 89,
      sellerId: '1',
      createdAt: new Date('2024-12-05'),
      updatedAt: new Date('2024-12-05'),
      status: 'active'
    },
    {
      id: '6',
      name: 'Smart Watch Pro',
      description: 'Advanced smartwatch with health monitoring and GPS.',
      price: 39999,
      category: 'Electronics',
      imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500',
      stock: 12,
      sales: 164,
      sellerId: '1',
      createdAt: new Date('2024-12-06'),
      updatedAt: new Date('2024-12-06'),
      status: 'draft'
    },
    {
      id: '7',
      name: 'Designer Sunglasses',
      description: 'Premium UV protection sunglasses with modern design.',
      price: 15999,
      category: 'Fashion',
      imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500',
      stock: 7,
      sales: 73,
      sellerId: '1',
      createdAt: new Date('2024-12-07'),
      updatedAt: new Date('2024-12-07'),
      status: 'inactive'
    },
    {
      id: '8',
      name: 'Aromatherapy Diffuser',
      description: 'Modern design diffuser with LED lights and timer.',
      price: 7999,
      category: 'Home & Living',
      imageUrl: 'https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=500',
      stock: 0,
      sales: 192,
      sellerId: '1',
      createdAt: new Date('2024-12-08'),
      updatedAt: new Date('2024-12-08'),
      status: 'active'
    }
  ];

  getCategories(): ProductCategory[] {
    return this.mockCategories;
  }

  getProducts(): Product[] {
    return this.mockProducts;
  }
}
