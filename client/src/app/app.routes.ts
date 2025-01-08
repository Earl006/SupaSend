import { Routes } from '@angular/router';
import { SellerLayoutComponent } from './components/seller/seller-layout/seller-layout.component';
import { SellerDashboardComponent } from './components/seller/seller-dashboard/seller-dashboard.component';
import { SellerProductsComponent } from './components/seller/seller-products/seller-products.component';
import { SellerOrdersComponent } from './components/seller/seller-orders/seller-orders.component';

export const routes: Routes = [
  {
    path: 'marketplace/seller',
    component: SellerLayoutComponent,
    children: [
      { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
      },
      { 
        path: 'home', 
        component: SellerDashboardComponent,
        title: 'Seller Dashboard - SuperSend'
      },
      { 
        path: 'my-products', 
        component: SellerProductsComponent,
        title: 'My Products - SuperSend'
      },
      { 
        path: 'my-orders', 
        component: SellerOrdersComponent,
        title: 'My Orders - SuperSend'
      }
    ]
  },
  { 
    path: '', 
    redirectTo: '/marketplace/seller/home', 
    pathMatch: 'full' 
  }
];
