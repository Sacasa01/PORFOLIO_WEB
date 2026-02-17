import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() currentLanguage = 'en';

  contactInfo = [
    {
      titleEn: 'Email',
      titleEs: 'Correo',
      value: 'santiago@example.com',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      titleEn: 'Phone',
      titleEs: 'Teléfono',
      value: '+1 (555) 123-4567',
      icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z'
    },
    {
      titleEn: 'Location',
      titleEs: 'Ubicación',
      value: 'Your City, Country',
      icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z'
    }
  ];

  onSubmit() {
    console.log('Form submitted');
    alert('Thank you for your message!');
  }
}