import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-seller-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './seller-sidebar.component.html',
  styleUrls: ['./seller-sidebar.component.css']
})
export class SellerSidebarComponent {
  menuItems = [
    { 
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', 
      label: 'Home', 
      route: '/marketplace/seller/home' 
    },
    { 
      icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z', 
      label: 'My Products', 
      route: '/marketplace/seller/my-products' 
    },
    { 
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', 
      label: 'My Orders', 
      route: '/marketplace/seller/my-orders' 
    }
  ];

  logout() {
    // Implement logout logic here
    window.location.href = '/login';
  }
}
