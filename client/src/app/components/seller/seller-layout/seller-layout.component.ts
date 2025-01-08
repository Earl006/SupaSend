import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SellerSidebarComponent } from '../seller-sidebar/seller-sidebar.component';

@Component({
  selector: 'app-seller-layout',
  standalone: true,
  imports: [RouterModule, SellerSidebarComponent],
  templateUrl: './seller-layout.component.html',
  styleUrls: ['./seller-layout.component.css']
})
export class SellerLayoutComponent {}
