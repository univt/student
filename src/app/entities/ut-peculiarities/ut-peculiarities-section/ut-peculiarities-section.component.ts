import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { UTPeculiarityCard } from '~entities/ut-peculiarities/ut-peculiarities-list/ut-peculiarities-card.type'
import { UTPeculiaritiesListComponent } from '~entities/ut-peculiarities/ut-peculiarities-list/ut-peculiarities-list.component'
import { UTPeculiaritiesSectionService } from '~entities/ut-peculiarities/ut-peculiarities-section/ut-peculiarities-section.service'
import { UTPeculiaritiesSectionParameters } from '~entities/ut-peculiarities/ut-peculiarities-section/ut-peculiarities-section.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UTPeculiaritiesListComponent],
  selector: 'app-ut-peculiarities-section',
  standalone: true,
  styleUrl: './ut-peculiarities-section.component.sass',
  templateUrl: './ut-peculiarities-section.component.html',
})
export class UTPeculiaritiesSectionComponent implements OnInit {
  protected sectionParameters: UTPeculiaritiesSectionParameters = {
    list: {
      emptyStateText: 'No data.',
    },
    titleText: 'No data',
  }
  protected utPeculiarities: readonly UTPeculiarityCard[] = []

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly utPeculiaritiesSectionService: UTPeculiaritiesSectionService,
  ) {}

  public ngOnInit(): void {
    this.utPeculiaritiesSectionService.readSectionParameters()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sectionParameters: UTPeculiaritiesSectionParameters): void => {
        this.sectionParameters = sectionParameters
        this.cdr.markForCheck()
      })
    this.utPeculiaritiesSectionService.readUTPeculiarities()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((utPeculiarities: readonly UTPeculiarityCard[]): void => {
        this.utPeculiarities = utPeculiarities
        this.cdr.markForCheck()
      })
  }
}
