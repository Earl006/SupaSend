import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { DarkModeService } from './services/dark-mode.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerDashboardComponent } from './components/seller/seller-dashboard/seller-dashboard.component';
import { SellerSidebarComponent } from './components/seller/seller-sidebar/seller-sidebar.component';
import { SellerProductsComponent } from './components/seller/seller-products/seller-products.component';
import { SellerOrdersComponent } from './components/seller/seller-orders/seller-orders.component';
import { SellerLayoutComponent } from './components/seller/seller-layout/seller-layout.component';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from './components/shared/page-header/page-header.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SellerDashboardComponent,
    SellerSidebarComponent,
    SellerProductsComponent,
    SellerOrdersComponent,
    SellerLayoutComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule, FormsModule, HttpClient
  ],
  providers: [DarkModeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
