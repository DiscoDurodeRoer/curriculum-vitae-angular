import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideDdr } from 'ddr-ng/providers/config';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';
import { spinnerInterceptor } from './core/interceptors/spinner-interceptor';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';

registerLocaleData(localeEs);
registerLocaleData(localeEn);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(
      withInterceptors([
        spinnerInterceptor
      ])
    ),
    provideAnimations(),
    provideDdr({
      theme: {
        name: 'ddr-blue'
      },
      translate: {
        path: `/i18n/`,
        language: 'es',
        availableLanguages: ['es', 'en']
      }
    })
  ]
};
