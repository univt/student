import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { AccordionModule } from 'primeng/accordion'
import { FrequentlyAskedQuestionsService } from '~entities/frequently-asked-questions/frequently-asked-questions.service'
import { FrequentlyAskedQuestion } from '~entities/frequently-asked-questions/frequently-asked-questions.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AccordionModule],
  selector: 'app-frequently-asked-questions-list',
  standalone: true,
  styleUrl: './frequently-asked-questions-list.component.sass',
  templateUrl: './frequently-asked-questions-list.component.html',
})
export class FrequentlyAskedQuestionsListComponent implements OnInit {
  public list: ReadonlyArray<FrequentlyAskedQuestion> = []

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly frequentlyAskedQuestionsService: FrequentlyAskedQuestionsService,
  ) {}

  public ngOnInit(): void {
    this.frequentlyAskedQuestionsService.getFrequentlyAskedQuestions()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((list: ReadonlyArray<FrequentlyAskedQuestion>): void => {
        this.list = list
        this.cdr.markForCheck()
      })
  }
}
