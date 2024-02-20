import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // { provide: BACKEND_URL, useValue: '127.0.0.1' },
    provideAnimations(),
    provideRouter(routes)]
};
