import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() isDarkMode = true;
  @Input() currentLanguage = 'en';
  @Input() translations: any;
  
  @Output() toggleDarkMode = new EventEmitter<void>();
  @Output() toggleLanguage = new EventEmitter<void>();
  @Output() scrollToSection = new EventEmitter<string>();

  mobileMenuOpen = false;

  onToggleDarkMode() {
    this.toggleDarkMode.emit();
  }

  onToggleLanguage() {
    this.toggleLanguage.emit();
  }

  onNavClick(sectionId: string) {
    this.scrollToSection.emit(sectionId);
    this.mobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  getLabel(key: string): string {
    const lang = this.currentLanguage as 'en' | 'es';
    return this.translations?.[lang]?.[key] || key;
  }
}