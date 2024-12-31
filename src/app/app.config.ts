import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),               // Set up the router
    provideClientHydration(),            // Enable client-side hydration
    provideHttpClient(withFetch())       // Configure HttpClient to use fetch API
  ]
};
