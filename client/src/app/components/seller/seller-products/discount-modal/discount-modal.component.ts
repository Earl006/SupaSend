import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-discount-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div *ngIf="show" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center">
      <div class="w-full max-w-md mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl animate-in slide-in-from-bottom zoom-in-95 duration-300">
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-700">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">Set Discount</h2>
          <button (click)="closeModal()" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="p-6 space-y-4">
          <div class="flex items-center space-x-4">
            <div class="h-16 w-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900">
              <img [src]="product?.imageUrl" [alt]="product?.name" class="w-full h-full object-cover">
            </div>
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white">{{product?.name}}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Current price: {{formatPrice(product?.price || 0)}}</p>
            </div>
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Discount Percentage</label>
            <input type="number"
                   [(ngModel)]="discountPercent"
                   min="0"
                   max="100"
                   class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                   placeholder="Enter discount percentage">
          </div>

          <div *ngIf="product && discountPercent > 0" class="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl space-y-2">
            <div class="flex justify-between text-sm">
              <span class="text-gray-500 dark:text-gray-400">Original price:</span>
              <span class="text-gray-900 dark:text-white">{{formatPrice(product.price)}}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-500 dark:text-gray-400">Discount amount:</span>
              <span class="text-red-500">-{{formatPrice(getDiscountAmount())}}</span>
            </div>
            <div class="flex justify-between font-medium pt-2 border-t border-gray-200 dark:border-gray-700">
              <span class="text-gray-900 dark:text-white">Final price:</span>
              <span class="text-green-500">{{formatPrice(getFinalPrice())}}</span>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex justify-end space-x-4 p-6 border-t border-gray-100 dark:border-gray-700">
          <button (click)="closeModal()"
                  class="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors">
            Cancel
          </button>
          <button (click)="confirmDiscount()"
                  [disabled]="!isValidDiscount()"
                  class="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            Apply Discount
          </button>
        </div>
      </div>
    </div>
  `
})
export class DiscountModalComponent {
  @Input() show = false;
  @Input() product: Product | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<number>();

  discountPercent: number = 0;

  closeModal() {
    this.discountPercent = 0;
    this.close.emit();
  }

  confirmDiscount() {
    if (this.isValidDiscount()) {
      this.confirm.emit(this.discountPercent);
      this.closeModal();
    }
  }

  isValidDiscount(): boolean {
    return this.discountPercent > 0 && this.discountPercent <= 100;
  }

  getDiscountAmount(): number {
    if (!this.product) return 0;
    return (this.product.price * this.discountPercent) / 100;
  }

  getFinalPrice(): number {
    if (!this.product) return 0;
    return this.product.price - this.getDiscountAmount();
  }

  formatPrice(price: number): string {
    return (price / 100).toLocaleString('en-KE', {
      style: 'currency',
      currency: 'KES'
    });
  }
}
