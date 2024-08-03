import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { CardModule } from 'primeng/card'
import { UTServiceCard } from '~entities/ut-services/price-list/ut-service-card.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ButtonModule,
    CardModule,
  ],
  selector: 'app-price-list',
  standalone: true,
  styleUrl: './price-list.component.sass',
  templateUrl: './price-list.component.html',
})
export class PriceListComponent {
  @Input({ required: true })
  public emptyStateText = 'No data.'

  @Input({ required: true })
  public openChatButtonText = 'No data'

  @Input({ required: true })
  public uTServices: ReadonlyArray<UTServiceCard> = []
}
