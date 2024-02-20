import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClarityIcons, userIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';
import { ClarityModule } from "@clr/angular";
import { SharedModule } from './shared/shared.module';

ClarityIcons.addIcons(userIcon);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ClarityModule,
    SharedModule
  ],
  // templateUrl: './app.component.html',
  template: '<app-layout><router-outlet></router-outlet></app-layout>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
