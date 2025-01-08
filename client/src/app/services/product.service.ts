import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductCategory } from '../models/product.model';
import { environment } from '../core/config/environment.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  // Product CRUD operations
  getProducts(filters?: any): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl, { params: filters });
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: string, product: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Category operations
  getCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(`${this.apiUrl}/categories`);
  }

  createCategory(category: Partial<ProductCategory>): Observable<ProductCategory> {
    return this.http.post<ProductCategory>(`${this.apiUrl}/categories`, category);
  }

  // Product image upload
  uploadProductImage(file: File): Observable<{ url: string }> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http.post<{ url: string }>(`${this.apiUrl}/upload-image`, formData);
  }

  // Product variants
  addProductVariant(productId: string, variant: any): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/${productId}/variants`, variant);
  }

  // Product status
  updateProductStatus(id: string, status: 'active' | 'inactive' | 'draft'): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${id}/status`, { status });
  }
}
