import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CardModule } from 'primeng/card'
import { UTServiceCard } from '~entities/ut-services/price-list/ut-service-card.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardModule],
  selector: 'app-price-list',
  standalone: true,
  styleUrl: './price-list.component.sass',
  templateUrl: './price-list.component.html',
})
export class PriceListComponent {
  @Input()
  public emptyStateText = 'No data.'

  @Input()
  public uTServices: ReadonlyArray<UTServiceCard> = []
}
