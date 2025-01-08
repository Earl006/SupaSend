import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{{title}}</h1>
      <p *ngIf="subtitle" class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{subtitle}}</p>
    </div>
  `
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
