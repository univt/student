import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { FrequentlyAskedQuestionsListComponent } from '~entities/frequently-asked-questions/frequently-asked-questions-list/frequently-asked-questions-list.component'
import { FrequentlyAskedQuestionsSectionService } from '~entities/frequently-asked-questions/frequently-asked-questions-section/frequently-asked-questions-section.service'
import { FrequentlyAskedQuestionsSectionParameters } from '~entities/frequently-asked-questions/frequently-asked-questions-section/frequently-asked-questions-section.type'
import { FrequentlyAskedQuestion } from '~entities/frequently-asked-questions/frequently-asked-questions.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FrequentlyAskedQuestionsListComponent],
  selector: 'app-frequently-asked-questions-section',
  standalone: true,
  styleUrl: './frequently-asked-questions-section.component.sass',
  templateUrl: './frequently-asked-questions-section.component.html',
})
export class FrequentlyAskedQuestionsSectionComponent implements OnInit {
  protected frequentlyAskedQuestions: ReadonlyArray<FrequentlyAskedQuestion> = []
  protected sectionParameters: FrequentlyAskedQuestionsSectionParameters = {
    list: {
      emptyStateText: 'No data.',
    },
    title: 'No data',
  }

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly frequentlyAskedQuestionsSectionService: FrequentlyAskedQuestionsSectionService,
  ) {}

  public ngOnInit(): void {
    this.frequentlyAskedQuestionsSectionService.readSectionParameters()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sectionParameters: FrequentlyAskedQuestionsSectionParameters): void => {
        this.sectionParameters = sectionParameters
        this.cdr.markForCheck()
      })
      this.frequentlyAskedQuestionsSectionService.readFrequentlyAskedQuestions()
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((frequentlyAskedQuestions: ReadonlyArray<FrequentlyAskedQuestion>): void => {
          this.frequentlyAskedQuestions = frequentlyAskedQuestions
          this.cdr.markForCheck()
        })
  }
}
