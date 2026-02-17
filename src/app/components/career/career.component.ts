import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {
  @Input() currentLanguage = 'en';

  jobs = [
    {
      titleEn: 'Senior Frontend Developer',
      titleEs: 'Desarrollador Frontend Senior',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      descEn: 'Leading frontend development with Angular, implementing responsive designs and optimizing performance for high-traffic applications.',
      descEs: 'Liderando el desarrollo frontend con Angular, implementando diseños responsivos y optimizando el rendimiento para aplicaciones de alto tráfico.',
      skills: ['Angular', 'TypeScript', 'Performance', 'Leadership']
    },
    {
      titleEn: 'Full Stack Developer',
      titleEs: 'Desarrollador Full Stack',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      descEn: 'Developed full-stack web applications using Angular and Node.js, managing databases and API development.',
      descEs: 'Desarrollé aplicaciones web full-stack usando Angular y Node.js, gestionando bases de datos y desarrollo de APIs.',
      skills: ['Angular', 'Node.js', 'MongoDB', 'REST APIs']
    },
    {
      titleEn: 'Junior Web Developer',
      titleEs: 'Desarrollador Web Junior',
      company: 'Web Studio Pro',
      period: '2019 - 2020',
      descEn: 'Started with HTML, CSS and JavaScript, building responsive websites and learning modern frameworks.',
      descEs: 'Comencé con HTML, CSS y JavaScript, construyendo sitios web responsivos y aprendiendo frameworks modernos.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
    }
  ];
}