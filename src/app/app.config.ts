import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { provideMarkdown } from 'ngx-markdown';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    
    provideHttpClient(),
    provideMarkdown(),
    providePrimeNG({
      ripple: true,
      theme: {
          preset: Aura,
          options: {
            cssLayer: {
                name: 'primeng',
                order: "theme,base,components,utilities,primeng",
            }
        }
      }
  })
  ]
};
