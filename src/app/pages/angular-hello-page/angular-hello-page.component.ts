import { Component } from '@angular/core';
import { AngularHelloComponent } from '~app/angular-hello/angular-hello.component';

@Component({
  imports: [AngularHelloComponent],
  selector: 'app-angular-hello-page',
  standalone: true,
  styleUrl: './angular-hello-page.component.sass',
  templateUrl: './angular-hello-page.component.html',
})
export class AngularHelloPageComponent {}
