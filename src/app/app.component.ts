import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { PriceListComponent } from '~entities/ut-services/price-list/price-list.component'

@Component({
  imports: [
    RouterOutlet,

    // For the app.
    PriceListComponent,
  ],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.sass',
  templateUrl: './app.component.html',
})
export class AppComponent {}
