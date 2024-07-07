import { Component } from '@angular/core';
import { PriceListComponent } from '~app/entities/ut-services/price-list/price-list.component';

@Component({
  imports: [PriceListComponent],
  selector: 'app-home-page',
  standalone: true,
  styleUrl: './home-page.component.sass',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
