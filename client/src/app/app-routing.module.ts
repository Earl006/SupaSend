import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLayoutComponent } from './components/seller/seller-layout/seller-layout.component';
import { SellerDashboardComponent } from './components/seller/seller-dashboard/seller-dashboard.component';
import { SellerProductsComponent } from './components/seller/seller-products/seller-products.component';
import { SellerOrdersComponent } from './components/seller/seller-orders/seller-orders.component';

const routes: Routes = [
  {
    path: 'seller',
    component: SellerLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: SellerDashboardComponent },
      { path: 'products', component: SellerProductsComponent },
      { path: 'orders', component: SellerOrdersComponent }
    ]
  },
  { path: '', redirectTo: '/seller/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
