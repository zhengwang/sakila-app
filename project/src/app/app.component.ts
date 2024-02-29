import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CsrfService } from './service/csrf.service';
import { ClarityModule } from '@clr/angular';
import { MainModule } from './main/main.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MainModule, RouterOutlet],
  template: '<router-outlet></router-outlet>',
  providers: [
    { provide: CsrfService }
  ],
  styles: ``
})
export class AppComponent {
  title = 'project';

  constructor(private csrfSvc: CsrfService) { }
}
