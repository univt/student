import { provideHttpClient, withFetch } from '@angular/common/http'
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { routes } from '~app/app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), 
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
}
