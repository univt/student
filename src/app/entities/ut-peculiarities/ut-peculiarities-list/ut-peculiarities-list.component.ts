import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CardModule } from 'primeng/card'
import { UTPeculiarityCard } from '~entities/ut-peculiarities/ut-peculiarities-list/ut-peculiarities-card.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardModule,
  ],
  selector: 'app-ut-peculiarities-list',
  standalone: true,
  styleUrl: './ut-peculiarities-list.component.sass',
  templateUrl: './ut-peculiarities-list.component.html',
})
export class UTPeculiaritiesListComponent {
  @Input({ required: true })
  public emptyStateText = 'No data.'

  @Input({ required: true })
  public utPeculiarities: readonly UTPeculiarityCard[] = []
}
