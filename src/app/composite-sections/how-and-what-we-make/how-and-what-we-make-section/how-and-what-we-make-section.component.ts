import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { HowAndWhatWeMakeSectionParametersSectionService } from '~composite-sections/how-and-what-we-make/how-and-what-we-make-section.service'
import { HowAndWhatWeMakeSectionParameters } from '~composite-sections/how-and-what-we-make/how-and-what-we-make-section.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-how-and-what-we-make-section',
  standalone: true,
  styleUrl: './how-and-what-we-make-section.component.sass',
  templateUrl: './how-and-what-we-make-section.component.html',
})
export class HowAndWhatWeMakeSectionParametersSectionComponent implements OnInit {
  protected howWeMakeList: readonly string[] = []
  protected howWeMakeTitleText = 'No data'
  protected whatWeMakeList: readonly string[] = []
  protected whatWeMakeTitleText = 'No data'

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly howAndWhatWeMakeSectionParametersSectionService: HowAndWhatWeMakeSectionParametersSectionService,
  ) {}

  public ngOnInit(): void {
    this.howAndWhatWeMakeSectionParametersSectionService.readSectionParameters()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sectionParameters: HowAndWhatWeMakeSectionParameters): void => {
        this.howWeMakeList = sectionParameters.howWeMake.paragraphTextList
        this.howWeMakeTitleText = sectionParameters.howWeMake.titleText
        this.whatWeMakeList = sectionParameters.whatWeMake.paragraphTextList
        this.whatWeMakeTitleText = sectionParameters.whatWeMake.titleText
        this.cdr.markForCheck()
      })
  }
}
