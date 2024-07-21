import { ChangeDetectionStrategy, Component } from '@angular/core'
import { PriceListComponent } from '~entities/ut-services/price-list/price-list.component'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PriceListComponent],
  selector: 'app-ut-services-section',
  standalone: true,
  styleUrl: './ut-services-section.component.sass',
  templateUrl: './ut-services-section.component.html',
})
export class UTServicesSectionComponent {}
