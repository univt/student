import { Routes } from '@angular/router'
import { AngularHelloPageComponent } from '~pages/angular-hello-page/angular-hello-page.component'
import { HomePageComponent } from '~pages/home-page/home-page.component'

export const routes: Routes = [
  {
    component: HomePageComponent,
    path: '',
  },
  {
    component: AngularHelloPageComponent,
    path: 'angular-hello',
  },
]
