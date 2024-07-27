import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CardModule } from 'primeng/card'
import { UTService } from '~entities/ut-services/ut-services.type'

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
  public uTServices: ReadonlyArray<UTService> = []
}
