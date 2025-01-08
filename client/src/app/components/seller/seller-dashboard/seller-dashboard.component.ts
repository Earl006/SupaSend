import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../../../services/dark-mode.service';
import { Subscription } from 'rxjs';
import { PageHeaderComponent } from '../../../components/shared/page-header/page-header.component';
import {
  Chart,
  ChartConfiguration,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { FormsModule } from '@angular/forms';
import { ProductFormModalComponent } from '../seller-products/product-form-modal/product-form-modal.component';
import { RestockModalComponent } from '../seller-products/restock-modal/restock-modal.component';
import { DiscountModalComponent } from '../seller-products/discount-modal/discount-modal.component';
import { ProductDetailsModalComponent } from '../seller-products/product-details-modal/product-details-modal.component';

// Register the chart components we need
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler  // Add this
);

@Component({
  selector: 'app-seller-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    PageHeaderComponent,
    ProductFormModalComponent,
    RestockModalComponent, 
    DiscountModalComponent,
    ProductDetailsModalComponent
  ],
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('salesChart') salesChartRef!: ElementRef;
  private salesChart: Chart | null = null;

  isDarkMode = false;
  private darkModeSubscription!: Subscription;
  
  sellerInfo = {
    name: 'John Doe',
    role: 'Premium Seller',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=000&color=fff',
    initials: 'JD'  // Fixed from 'inials' to 'initials'
  };

  salesStats = {
    totalSales: '24,550',
    totalProducts: 48,
    pendingDeliveries: 12,
    deliveredProducts: 156
  };

  weeklySales = [
    { day: 'Mon', amount: 1200 },
    { day: 'Tue', amount: 1800 },
    { day: 'Wed', amount: 1400 },
    { day: 'Thu', amount: 2200 },
    { day: 'Fri', amount: 1900 },
    { day: 'Sat', amount: 2400 },
    { day: 'Sun', amount: 2100 }
  ];

  sampleChats = [
    { user: 'Alice', message: 'Is this product still available?', time: '2m ago' },
    { user: 'Bob', message: 'When can you ship to London?', time: '5m ago' },
    { user: 'Carol', message: 'Great service, thanks!', time: '15m ago' }
  ];

  // Add missing properties
  searchQuery = '';
  selectedCategory = '';
  selectedStatus = '';
  selectedDiscount = '';
  selectedProduct: any = null;
  filteredProducts: any[] = [];
  
  // Modal flags
  showActionMenu = false;
  showAddModalFlag = false;
  showEditModalFlag = false;
  showRestockModalFlag = false;
  showDiscountModalFlag = false;
  showDetailsModalFlag = false;

  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.darkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
      // Update chart theme if needed
      if (this.salesChart) {
        this.updateChartTheme(isDark);
      }
    });
  }

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    this.initializeChart();
  }

  private initializeChart() {
    const ctx = this.salesChartRef.nativeElement.getContext('2d');
    
    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: this.weeklySales.map(sale => sale.day),
        datasets: [{
          label: 'Sales (KES)',
          data: this.weeklySales.map(sale => sale.amount),
          fill: true,
          borderColor: '#10B981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          tension: 0.4,
          borderWidth: 2,
          pointBackgroundColor: '#10B981',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#10B981'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: (context: any) => `KES ${context.parsed.y.toLocaleString()}`
            }
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: this.isDarkMode ? '#9CA3AF' : '#4B5563'
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: this.isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              color: this.isDarkMode ? '#9CA3AF' : '#4B5563',
              callback: (value: any) => `KES ${value.toLocaleString()}`
            }
          }
        }
      }
    };
    
    this.salesChart = new Chart(ctx, config);
  }

  private updateChartTheme(isDark: boolean) {
    if (!this.salesChart) return;

    const textColor = isDark ? '#9CA3AF' : '#4B5563';
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

    const scales = this.salesChart.options.scales as any;
    if (scales) {
      if (scales['x']) {
        scales['x'].ticks.color = textColor;
      }
      if (scales['y']) {
        scales['y'].ticks.color = textColor;
        scales['y'].grid.color = gridColor;
      }
    }
    
    this.salesChart.update();
  }

  ngOnDestroy() {
    if (this.darkModeSubscription) {
      this.darkModeSubscription.unsubscribe();
    }
    if (this.salesChart) {
      this.salesChart.destroy();
    }
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  // Add missing methods
  getStockClass(stock: number): string {
    if (stock <= 0) return 'text-red-600 dark:text-red-400';
    if (stock <= 10) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-green-600 dark:text-green-400';
  }

  showProductDetails(product: any): void {
    this.selectedProduct = product;
    this.showDetailsModalFlag = true;
  }

  toggleActionMenu(product: any): void {
    this.selectedProduct = product;
    this.showActionMenu = !this.showActionMenu;
  }

  openEditModal(product: any): void {
    this.selectedProduct = product;
    this.showEditModalFlag = true;
  }

  closeEditModal(): void {
    this.showEditModalFlag = false;
  }

  showRestockModal(product: any): void {
    this.selectedProduct = product;
    this.showRestockModalFlag = true;
  }

  closeRestockModal(): void {
    this.showRestockModalFlag = false;
  }

  showDiscountModal(product: any): void {
    this.selectedProduct = product;
    this.showDiscountModalFlag = true;
  }

  closeDiscountModal(): void {
    this.showDiscountModalFlag = false;
  }

  closeDetailsModal(): void {
    this.showDetailsModalFlag = false;
  }

  closeAddModal(): void {
    this.showAddModalFlag = false;
  }
}
