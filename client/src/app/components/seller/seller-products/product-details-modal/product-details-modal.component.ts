import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-details-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="show" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center">
      <div class="w-full max-w-2xl mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl animate-in slide-in-from-bottom zoom-in-95 duration-300">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">Product Details</h2>
          <button (click)="close.emit()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="p-6" *ngIf="product">
          <div class="flex space-x-6">
            <!-- Product Image -->
            <div class="w-48 h-48 flex-shrink-0">
              <img [src]="product.imageUrl"
                   [alt]="product.name"
                   class="w-full h-full object-cover rounded-xl">
            </div>

            <!-- Product Info -->
            <div class="flex-1 space-y-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{product.name}}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{product.description}}</p>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Category</div>
                  <div class="text-gray-900 dark:text-white">{{product.category}}</div>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Status</div>
                  <span [class]="'px-3 py-1 rounded-full text-xs font-medium inline-block ' + 
                              (product.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400' :
                               product.status === 'inactive' ? 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-400' :
                               'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400')">
                    {{product.status === 'active' ? 'Published' : 
                      product.status === 'inactive' ? 'Hidden' : 
                      'Draft'}}
                  </span>
                </div>
              </div>

              <div class="grid grid-cols-3 gap-4">
                <div class="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
                  <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Price</div>
                  <div class="text-lg font-semibold text-gray-900 dark:text-white">{{formatPrice(product.price)}}</div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
                  <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Stock</div>
                  <div [class]="'text-lg font-semibold ' + getStockClass(product.stock)">{{product.stock}}</div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3">
                  <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Sales</div>
                  <div class="text-lg font-semibold text-gray-900 dark:text-white">{{product.sales}}</div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Created</div>
                  <div class="text-gray-900 dark:text-white">{{product.createdAt | date:'medium'}}</div>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Last Updated</div>
                  <div class="text-gray-900 dark:text-white">{{product.updatedAt | date:'medium'}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="p-6 border-t border-gray-100 dark:border-gray-700">
          <div class="flex justify-between items-center">
            <div class="flex space-x-2">
              <button (click)="edit.emit()"
                      class="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Edit</span>
              </button>
              <button (click)="restock.emit()"
                      class="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
                <span>Restock</span>
              </button>
              <button (click)="discount.emit()"
                      class="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span>Discount</span>
              </button>
            </div>
            <button (click)="toggleStatus.emit()"
                    class="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
              <svg *ngIf="product?.status === 'active'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
              <svg *ngIf="product?.status !== 'active'" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>{{product?.status === 'active' ? 'Hide' : 'Show'}}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProductDetailsModalComponent {
  @Input() show = false;
  @Input() product: Product | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() restock = new EventEmitter<void>();
  @Output() discount = new EventEmitter<void>();
  @Output() toggleStatus = new EventEmitter<void>();

  formatPrice(price: number): string {
    return (price / 100).toLocaleString('en-KE', {
      style: 'currency',
      currency: 'KES'
    });
  }

  getStockClass(stock: number): string {
    if (stock === 0) return 'text-red-500 dark:text-red-400';
    if (stock <= 5) return 'text-yellow-500 dark:text-yellow-400';
    return 'text-green-500 dark:text-green-400';
  }
}
