import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { HeroSectionService } from '~composite-sections/hero-section/hero-section.service'
import { HeroSectionParameters } from '~composite-sections/hero-section/hero-section.type'
import { LayoutHeroComponent } from '~ui-kit/layout/layout-hero/layout-hero.component'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LayoutHeroComponent,
  ],
  selector: 'app-hero-section',
  standalone: true,
  styleUrl: './hero-section.component.sass',
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent implements OnInit {
  protected sectionParameters: HeroSectionParameters = {
    contactText: 'No data',
    contactURL: 'No data',
    mottoText: 'No data.',
    organizationDescriptionText: 'No data',
    organizationTitleText: 'No data',
  }

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly heroSectionService: HeroSectionService,
  ) {}

  public ngOnInit(): void {
    this.heroSectionService.readSectionParameters()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sectionParameters: HeroSectionParameters): void => {
        this.sectionParameters = sectionParameters
        this.cdr.markForCheck()
      })
  }
}
