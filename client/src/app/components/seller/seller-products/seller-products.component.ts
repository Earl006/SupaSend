import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Add this import
import { Product } from '../../../models/product.model';
import { Category } from '../../../models/category.model';
import { PageHeaderComponent } from '../../../components/shared/page-header/page-header.component';
import { ProductFormModalComponent } from './product-form-modal/product-form-modal.component';
import { RestockModalComponent } from './restock-modal/restock-modal.component';
import { DiscountModalComponent } from './discount-modal/discount-modal.component';
import { ProductDetailsModalComponent } from './product-details-modal/product-details-modal.component';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-seller-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule, // Add this
    PageHeaderComponent,
    ProductFormModalComponent,
    RestockModalComponent,
    DiscountModalComponent,
    ProductDetailsModalComponent
  ],
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.css']
})
export class SellerProductsComponent implements OnInit, OnDestroy {
  @ViewChild('actionMenuContainer') actionMenuContainer!: ElementRef;

  // Seller Info
  sellerInfo = {
    name: 'John Doe',
    role: 'Premium Seller',
    avatar: 'path/to/avatar.jpg',
    initials: 'JD'
  };

  // Products
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedProduct: Product | null = null;

  // Filters
  searchQuery = '';
  selectedCategory = '';
  selectedStatus = '';
  selectedDiscount = '';

  // Categories
  categories: Category[] = [];

  // Action Menu
  showActionMenu = false;
  activeMenuId: string | null = null;
  private documentClickListener: any;

  // Modals
  showAddModal = false;
  showEditModalFlag = false;
  showRestockModalFlag = false;
  showDiscountModalFlag = false;
  showDetailsModalFlag = false;

  // Action menu position
  menuPosition = { top: '0px', left: '0px' };

  constructor(private productService: ProductService) {
    // Mock data
    this.categories = [
      { id: '1', name: 'Electronics' },
      { id: '2', name: 'Clothing' },
      { id: '3', name: 'Books' }
    ];

    this.products = [
      {
        id: '1',
        name: 'iPhone 14 Pro',
        description: 'Latest Apple iPhone with dynamic island, 48MP camera system, A16 Bionic chip',
        price: 159900,
        stock: 50,
        sales: 25,
        category: 'Electronics',
        status: 'active',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=400&hei=400',
        createdAt: new Date('2023-01-01'),
        updatedAt: new Date('2023-01-01'),
        sellerId: '1',
        discount: 10
      },
      {
        id: '2',
        name: 'Nike Air Max 270',
        description: 'Stylish and comfortable sneakers with Air Max cushioning technology',
        price: 14999,
        stock: 100,
        sales: 75,
        category: 'Clothing',
        status: 'active',
        imageUrl: 'https://static.nike.com/a/images/t_default/ouweg5dax4yqwpuqzxbk/air-max-270-shoes-V4DfZQ.png',
        createdAt: new Date('2023-01-02'),
        updatedAt: new Date('2023-01-02'),
        sellerId: '1',
        discount: 0
      },
      {
        id: '3',
        name: 'MacBook Air M2',
        description: 'Incredibly thin and light laptop with the powerful M2 chip',
        price: 134999,
        stock: 3,
        sales: 15,
        category: 'Electronics',
        status: 'inactive',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=400&hei=400',
        createdAt: new Date('2023-01-03'),
        updatedAt: new Date('2023-01-03'),
        sellerId: '1',
        discount: 5
      }
    ];

    this.documentClickListener = (event: Event) => {
      if (!this.actionMenuContainer?.nativeElement.contains(event.target)) {
        this.showActionMenu = false;
      }
    };
  }

  ngOnInit(): void {
    this.loadProducts();
    document.addEventListener('click', this.documentClickListener);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.documentClickListener);
  }

  ngDoCheck(): void {
    this.filterProducts();
  }

  // Load and filter products
  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filterProducts();
    });
  }

  // Filter Methods
  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => {
      const matchesSearch = !this.searchQuery || 
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      
      const matchesCategory = !this.selectedCategory || 
        product.category === this.selectedCategory;
      
      const matchesStatus = !this.selectedStatus || 
        product.status === this.selectedStatus;

      const matchesDiscount = !this.selectedDiscount || 
        (this.selectedDiscount === 'withDiscount' && product.discount > 0) ||
        (this.selectedDiscount === 'withoutDiscount' && product.discount === 0);

      return matchesSearch && matchesCategory && matchesStatus && matchesDiscount;
    });
  }

  // Action Menu Methods
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.actionMenuContainer?.nativeElement.contains(event.target)) {
      this.showActionMenu = false;
    }
  }

  toggleActionMenu(product: Product, event: MouseEvent): void {
    event.stopPropagation();
    
    if (this.selectedProduct?.id === product.id) {
      this.showActionMenu = !this.showActionMenu;
    } else {
      this.showActionMenu = true;
      this.selectedProduct = product;
    }
  }

  // Add click handler to close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.actionMenuContainer?.nativeElement.contains(event.target)) {
      this.showActionMenu = false;
    }
  }

  // Modal Methods
  openEditModal(product: Product): void {
    this.selectedProduct = product;
    this.showEditModalFlag = true;
    this.showActionMenu = false;
    this.showDetailsModalFlag = false;
  }

  closeEditModal(): void {
    this.showEditModalFlag = false;
    this.selectedProduct = null;
  }

  showRestockModal(product: Product): void {
    this.selectedProduct = product;
    this.showRestockModalFlag = true;
    this.showActionMenu = false;
    this.showDetailsModalFlag = false;
  }

  closeRestockModal(): void {
    this.showRestockModalFlag = false;
    this.selectedProduct = null;
  }

  showDiscountModal(product: Product): void {
    this.selectedProduct = product;
    this.showDiscountModalFlag = true;
    this.showActionMenu = false;
    this.showDetailsModalFlag = false;
  }

  closeDiscountModal(): void {
    this.showDiscountModalFlag = false;
    this.selectedProduct = null;
  }

  showProductDetails(product: Product): void {
    this.selectedProduct = { ...product }; // Create a copy
    this.showDetailsModalFlag = true;
    this.showActionMenu = false; // Close action menu if open
  }

  closeDetailsModal(): void {
    this.showDetailsModalFlag = false;
    this.selectedProduct = null;
  }

  // Action Methods
  onAddProduct(product: Product): void {
    // Mock implementation
    const newProduct = {
      ...product,
      id: (this.products.length + 1).toString(),
      sales: 0,
      sellerId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.products.unshift(newProduct);
    this.filterProducts();
    this.showAddModal = false;
  }

  onEditProduct(updatedProduct: Product): void {
    // Mock implementation
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = {
        ...updatedProduct,
        updatedAt: new Date()
      };
      this.filterProducts();
    }
    this.closeEditModal();
  }

  onRestock(quantity: number): void {
    // Mock implementation
    if (this.selectedProduct) {
      const index = this.products.findIndex(p => p.id === this.selectedProduct!.id);
      if (index !== -1) {
        this.products[index] = {
          ...this.products[index],
          stock: this.products[index].stock + quantity,
          updatedAt: new Date()
        };
        this.filterProducts();
      }
    }
    this.closeRestockModal();
  }

  onDiscount(discountPercent: number): void {
    // Mock implementation
    if (this.selectedProduct) {
      const index = this.products.findIndex(p => p.id === this.selectedProduct!.id);
      if (index !== -1) {
        const originalPrice = this.products[index].price;
        const discountAmount = Math.round(originalPrice * (discountPercent / 100));
        this.products[index] = {
          ...this.products[index],
          price: originalPrice - discountAmount,
          updatedAt: new Date()
        };
        this.filterProducts();
      }
    }
    this.closeDiscountModal();
  }

  toggleProductStatus(product: Product): void {
    // Mock implementation
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = {
        ...this.products[index],
        status: product.status === 'active' ? 'inactive' : 'active',
        updatedAt: new Date()
      };
      this.filterProducts();
    }
    this.showActionMenu = false;
  }

  toggleStatus(product: Product): void {
    const newStatus = product.status === 'active' ? 'inactive' : 'active';
    this.productService.updateProductStatus(product.id, newStatus).subscribe(() => {
      product.status = newStatus;
      this.showActionMenu = false;
    });
  }

  // Handle search and filter changes
  onSearchChange(): void {
    this.filterProducts();
  }

  onCategoryChange(): void {
    this.filterProducts();
  }

  onStatusChange(): void {
    this.filterProducts();
  }

  // Utility Methods
  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  }

  getStockClass(stock: number): string {
    if (stock <= 0) return 'text-red-600 dark:text-red-400';
    if (stock <= 10) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-green-600 dark:text-green-400';
  }
}
