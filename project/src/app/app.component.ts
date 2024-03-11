import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainModule } from './main/main.module';
import { CsrfService } from './service/csrf.service';
import { TokenInterceptor } from './service/token.interceptor';
import { ClarityModule } from '@clr/angular';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ClarityModule, HttpClientModule, MainModule, RouterOutlet],
  template: '<router-outlet></router-outlet>',
  providers: [
    { provide: CsrfService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  styles: ``
})
export class AppComponent {
  title = 'project';

  constructor(private csrfSvc: CsrfService) { }
}
