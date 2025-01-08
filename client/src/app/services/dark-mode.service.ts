import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  constructor() {
    this.initializeDarkMode();
  }

  private initializeDarkMode() {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedDarkMode || systemDarkMode;
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
    this.darkMode.next(shouldBeDark);

    // Listen for system changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('darkMode')) {
        this.setDarkMode(e.matches);
      }
    });
  }

  setDarkMode(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    this.darkMode.next(isDark);
  }

  toggleDarkMode() {
    const current = this.darkMode.value;
    this.setDarkMode(!current);
  }
}
