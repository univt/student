import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FrequentlyAskedQuestionsListComponent } from '~entities/frequently-asked-questions/frequently-asked-questions-list/frequently-asked-questions-list.component'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FrequentlyAskedQuestionsListComponent],
  selector: 'app-frequently-asked-questions-section',
  standalone: true,
  styleUrl: './frequently-asked-questions-section.component.sass',
  templateUrl: './frequently-asked-questions-section.component.html',
})
export class FrequentlyAskedQuestionsSectionComponent {}
