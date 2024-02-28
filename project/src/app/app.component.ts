import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CsrfService } from './service/csrf.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet],
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
