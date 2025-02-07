/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BajajChartComponent } from 'src/app/theme/shared/components/apexchart/bajaj-chart/bajaj-chart.component';
import { BarChartComponent } from 'src/app/theme/shared/components/apexchart/bar-chart/bar-chart.component';
import { ChartDataMonthComponent } from 'src/app/theme/shared/components/apexchart/chart-data-month/chart-data-month.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    BajajChartComponent,
    BarChartComponent,
    ChartDataMonthComponent
  ],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  public ListGroup: any[] = [];
  serviceCategories = [
    {
      name: 'Pintor',
      icon: 'fas fa-paint-roller',
      routeParam: 'painting'
    },
    {
      name: 'Digital Marketing',
      icon: 'fas fa-bullhorn',
      routeParam: 'digital-marketing'
    },
    {
      name: 'Video & Animation',
      icon: 'fas fa-video',
      routeParam: 'video-animation'
    },
    {
      name: 'Programador',
      icon: 'fas fa-laptop-code',
      routeParam: 'programming'
    },
    {
      name: 'Musico',
      icon: 'fas fa-music',
      routeParam: 'music'
    },
    {
      name: 'Fotógrafo',
      icon: 'fas fa-camera',
      routeParam: 'photography'
    },
    {
      name: 'UX/UI Design',
      icon: 'fas fa-palette',
      routeParam: 'ux-ui-design'
    },
    {
      name: 'Build AI Services',
      icon: 'fas fa-robot',
      routeParam: 'ai-services'
    }
  ];
}