import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideClientHydration(),

    importProvidersFrom(
      //aca se guardan todos los modulos que se van a usar en la aplicacion
      HttpClientModule,
    ),
  ]
};
