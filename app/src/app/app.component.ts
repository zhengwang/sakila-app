import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClarityIcons, userIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';
import { ClarityModule, ClrIconModule } from "@clr/angular";
import { DashboardModule } from './dashboard/dashboard.module';

ClarityIcons.addIcons(userIcon);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ClarityModule,
  ],
  // templateUrl: './app.component.html',
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
