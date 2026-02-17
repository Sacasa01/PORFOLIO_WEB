import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CareerComponent } from './components/career/career.component';
import { ContactComponent } from './components/contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    AboutComponent,
    ProjectsComponent,
    CareerComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isDarkMode = true;
  currentLanguage = 'en';

  translations = {
    en: {
      about: 'About Me',
      projects: 'My Projects',
      career: 'My Career',
      contact: 'Contact',
    },
    es: {
      about: 'Sobre Mí',
      projects: 'Mis Proyectos',
      career: 'Mi Carrera',
      contact: 'Contacto',
    },
  };

  ngOnInit() {
    this.loadPreferences();
  }

  loadPreferences() {
    const savedMode = localStorage.getItem('darkMode');
    const savedLanguage = localStorage.getItem('language');

    if (savedMode) {
      this.isDarkMode = JSON.parse(savedMode);
    }
    if (savedLanguage) {
      this.currentLanguage = savedLanguage;
    }

    this.applyTheme();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
    this.applyTheme();
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
    localStorage.setItem('language', this.currentLanguage);
  }

  applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  t(key: string): string {
    return (
      this.translations[this.currentLanguage as keyof typeof this.translations][
        key as keyof (typeof this.translations)['en']
      ] || key
    );
  }
}