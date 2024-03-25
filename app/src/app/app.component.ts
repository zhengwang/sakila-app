import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { CsrfService } from './service/csrf.service';
import { TokenInterceptor } from './service/token.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AuthModule, CommonModule, HttpClientModule, RouterOutlet],
  providers: [
    { provide: CsrfService },
    { provide: HTTP_INTERCEPTORS, useExisting: TokenInterceptor, multi: true }
  ],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';

  constructor(private csrfSvc: CsrfService) { }
}
