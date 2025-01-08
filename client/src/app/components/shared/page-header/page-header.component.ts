import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../../../services/dark-mode.service';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full bg-white dark:bg-gray-800 shadow-lg mt-4 mb-8 rounded-xl">
      <div class="px-8 py-6">
        <div class="flex justify-between items-center">
          <!-- Left: Title and Subtitle -->
          <div>
            <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {{ title }}
            </h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ subtitle }}</p>
          </div>

          <!-- Right: Theme Toggle, Username, Role, and Avatar -->
          <div class="flex items-center space-x-6">
            <button (click)="toggleDarkMode()"
                    class="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 
                           dark:hover:bg-gray-600 transition-all duration-300 
                           border border-gray-200 dark:border-gray-600 group">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   class="h-5 w-5 text-gray-600 dark:text-yellow-400 group-hover:text-gray-800 dark:group-hover:text-yellow-300" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor">
                <path *ngIf="!isDarkMode" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="1.5"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                <path *ngIf="isDarkMode" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="1.5"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <div class="text-right">
              <p class="text-sm font-medium text-gray-900 dark:text-white">{{ userName }}</p>
              <p class="text-xs text-gray-500 dark:text-gray-400">{{ userRole }}</p>
            </div>
            <div class="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 
                        flex items-center justify-center text-white font-medium text-lg shadow-lg">
              {{ userInitials }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() userName: string = 'John Doe';
  @Input() userRole: string = 'Premium Seller';
  @Input() userInitials: string = 'JD';
  isDarkMode = false;

  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.darkMode$.subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
}
