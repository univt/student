import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { UTService } from '~entities/ut-services/services.type';

@Component({
  imports: [CardModule],
  selector: 'app-price-list',
  standalone: true,
  styleUrl: './price-list.component.sass',
  templateUrl: './price-list.component.html',
})
export class PriceListComponent {
  public services: ReadonlyArray<UTService> = [
    {
      name: 'Диплом',
      priceDescription: 'от 6000 ₽',
    },
    {
      name: 'Курсовая работа',
      priceDescription: 'от 2700 ₽',
    },
  ]
}
