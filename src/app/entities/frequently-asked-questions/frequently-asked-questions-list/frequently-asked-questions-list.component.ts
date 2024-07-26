import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { AccordionModule } from 'primeng/accordion'
import { FrequentlyAskedQuestion } from '~entities/frequently-asked-questions/frequently-asked-questions.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AccordionModule],
  selector: 'app-frequently-asked-questions-list',
  standalone: true,
  styleUrl: './frequently-asked-questions-list.component.sass',
  templateUrl: './frequently-asked-questions-list.component.html',
})
export class FrequentlyAskedQuestionsListComponent {
  @Input()
  public emptyStateText = 'No data'

  @Input()
  public frequentlyAskedQuestions: ReadonlyArray<FrequentlyAskedQuestion> = []
}
