import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  @Input() currentLanguage = 'en';

  currentIndex = 0;

  projects = [
    {
      nameEn: 'Epic Portfolio',
      nameEs: 'Portafolio Épico',
      descEn: 'A stunning personal portfolio with dark mode and bilingual support',
      descEs: 'Un impresionante portafolio personal con modo oscuro y soporte bilingüe',
      color: 'linear-gradient(135deg, #ff006e 0%, #0f3460 100%)',
      tech: ['Angular', 'TypeScript', 'CSS', 'RxJS']
    },
    {
      nameEn: 'Task Manager App',
      nameEs: 'Aplicación de Tareas',
      descEn: 'A beautiful task management application with real-time updates',
      descEs: 'Una hermosa aplicación de gestión de tareas con actualizaciones en tiempo real',
      color: 'linear-gradient(135deg, #00d4ff 0%, #ffd700 100%)',
      tech: ['Angular', 'Firebase', 'Tailwind']
    },
    {
      nameEn: 'E-Commerce Platform',
      nameEs: 'Plataforma de Comercio Electrónico',
      descEn: 'Full-featured e-commerce platform with payment integration',
      descEs: 'Plataforma de comercio electrónico completa con integración de pagos',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      nameEn: 'AI Chat Bot',
      nameEs: 'Bot de Chat IA',
      descEn: 'Intelligent chatbot with natural language processing',
      descEs: 'Bot de chat inteligente con procesamiento de lenguaje natural',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      tech: ['Angular', 'OpenAI API', 'WebSocket']
    },
    {
      nameEn: 'Social Network',
      nameEs: 'Red Social',
      descEn: 'Interactive social media platform with real-time notifications',
      descEs: 'Plataforma de redes sociales interactiva con notificaciones en tiempo real',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      tech: ['Angular', 'Node.js', 'Socket.io', 'PostgreSQL']
    }
  ];

  nextProject() {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
      this.scrollCarousel();
    }
  }

  prevProject() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollCarousel();
    }
  }

  goToProject(index: number) {
    this.currentIndex = index;
    this.scrollCarousel();
  }

  scrollCarousel() {
    const carousel = document.querySelector('.carousel-track') as HTMLElement;
    if (carousel) {
      const offset = this.currentIndex * 100;
      carousel.style.transform = `translateX(-${offset}%)`;
    }
  }
}