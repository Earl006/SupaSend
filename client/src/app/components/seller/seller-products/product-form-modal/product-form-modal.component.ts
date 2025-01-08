import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-form-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div *ngIf="show" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center">
      <div class="w-full max-w-2xl mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl animate-in slide-in-from-bottom zoom-in-95 duration-300">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{isEditing ? 'Edit' : 'Add New'}} Product</h2>
          <button (click)="close.emit()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="p-6 space-y-6">
          <!-- Image Upload -->
          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Product Image</label>
            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-xl border-gray-300 dark:border-gray-600">
              <div class="space-y-1 text-center">
                <svg *ngIf="!product.imageUrl" class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <img *ngIf="product.imageUrl" [src]="product.imageUrl" class="mx-auto h-32 w-32 object-cover rounded-lg" />
                <div class="flex text-sm text-gray-600 dark:text-gray-400">
                  <label class="relative cursor-pointer rounded-md font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 focus-within:outline-none">
                    <span>Upload a file</span>
                    <input type="file" class="sr-only" (change)="onImageSelected($event)">
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <!-- Basic Info -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Product Name</label>
              <input type="text"
                     [(ngModel)]="product.name"
                     class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                     placeholder="Enter product name">
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
              <select [(ngModel)]="product.category"
                      class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow">
                <option value="">Select a category</option>
                <option *ngFor="let category of categories" [value]="category.name">{{category.name}}</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Price (KES)</label>
              <input type="number"
                     [(ngModel)]="product.price"
                     min="0"
                     class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                     placeholder="Enter price">
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Initial Stock</label>
              <input type="number"
                     [(ngModel)]="product.stock"
                     min="0"
                     [disabled]="isEditing"
                     class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                     placeholder="Enter initial stock">
              <p *ngIf="isEditing" class="text-sm text-gray-500 dark:text-gray-400">Use the Restock action to modify stock</p>
            </div>
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
            <textarea [(ngModel)]="product.description"
                      rows="4"
                      class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                      placeholder="Enter product description"></textarea>
          </div>

          <div class="space-y-2" *ngIf="!isEditing">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Initial Status</label>
            <select [(ngModel)]="product.status"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow">
              <option value="draft">Save as Draft</option>
              <option value="active">Publish Immediately</option>
            </select>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex justify-end space-x-4 p-6 border-t border-gray-100 dark:border-gray-700">
          <button (click)="close.emit()"
                  class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
            Cancel
          </button>
          <button (click)="onSave()"
                  [disabled]="!isValid"
                  class="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            {{isEditing ? 'Save Changes' : 'Add Product'}}
          </button>
        </div>
      </div>
    </div>
  `
})
export class ProductFormModalComponent implements OnInit {
  @Input() show = false;
  @Input() categories: any[] = [];
  @Input() isEditing = false;
  @Input() set product(value: Product | null) {
    if (value && this.isEditing) {
      this._product = { ...value };
    }
  }
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Product>();

  _product: Product = {
    id: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category: '',
    imageUrl: '',
    status: 'draft',
    sales: 0,
    sellerId: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    discount: 0  // Add this line
  };

  get product(): Product {
    return this._product;
  }

  ngOnInit() {
    if (!this.isEditing) {
      this._product = {
        id: '',
        name: '',
        description: '',
        price: 0,
        stock: 0,
        category: '',
        imageUrl: '',
        status: 'draft',
        sales: 0,
        sellerId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
        discount: 0  // Add this line
      };
    }
  }

  get isValid(): boolean {
    return (
      this.product.name.trim() !== '' &&
      this.product.description.trim() !== '' &&
      this.product.category !== '' &&
      this.product.price > 0 &&
      (!this.isEditing || this.product.stock >= 0)
    );
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // In a real app, you would upload this file to a server
      // For now, we'll just create a local URL
      this.product.imageUrl = URL.createObjectURL(file);
    }
  }

  onSave() {
    if (this.isValid) {
      this.save.emit(this.product);
      if (!this.isEditing) {
        // Only reset if adding new product
        this._product = {
          id: '',
          name: '',
          description: '',
          price: 0,
          stock: 0,
          category: '',
          imageUrl: '',
          status: 'draft',
          sales: 0,
          sellerId: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
          discount: 0  // Add this line
        };
      }
    }
  }
}
