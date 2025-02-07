import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Service {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  totalReviews: number;
  freelancerName: string;
  profileImage: string;
  tags: string[];
  deliveryTime: number;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  selectedCategory = 'Graphic Design';
  serviceCategories = [
    { name: 'Pintor', icon: 'fas fa-paint-roller' },
    { name: 'Digital Marketing', icon: 'fas fa-bullhorn' },
    { name: 'Video & Animation', icon: 'fas fa-video' },
    { name: 'Programador', icon: 'fas fa-laptop-code' },
    { name: 'Musico', icon: 'fas fa-music' },
    { name: 'Fotógrafo', icon: 'fas fa-camera' },
    { name: 'UX/UI Design', icon: 'fas fa-palette' },
    { name: 'Build AI Services', icon: 'fas fa-robot' }
  ];
  services: Service[] = [
    {
      id: 1,
      title: 'Professional Logo Design with Unique Branding',
      category: 'Graphic Design',
      price: 150.00,
      rating: 4.8,
      totalReviews: 45,
      freelancerName: 'Maria Silva',
      profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
      tags: ['Logo', 'Branding', 'Business'],
      deliveryTime: 3
    },
    {
      id: 2,
      title: 'Creative Illustration and Character Design',
      category: 'Graphic Design',
      price: 250.00,
      rating: 4.9,
      totalReviews: 62,
      freelancerName: 'João Santos',
      profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
      tags: ['Illustration', 'Character', 'Digital Art'],
      deliveryTime: 5
    }
  ];
}