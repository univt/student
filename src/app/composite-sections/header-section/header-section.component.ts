import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { HeaderSectionService } from '~composite-sections/header-section/header-section.service'
import { HeaderSectionParameters } from '~composite-sections/header-section/header-section.type'
import { LayoutHeaderComponent } from '~ui-kit/layout/layout-header/layout-header.component'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LayoutHeaderComponent,
  ],
  selector: 'app-header-section',
  standalone: true,
  styleUrl: './header-section.component.sass',
  templateUrl: './header-section.component.html',
})
export class HeaderSectionComponent implements OnInit {
  protected sectionParameters: HeaderSectionParameters = {
    contactText: 'No data',
    contactURL: 'No data',
  }

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly headerSectionService: HeaderSectionService,
  ) {}

  public ngOnInit(): void {
    this.headerSectionService.readSectionParameters()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sectionParameters: HeaderSectionParameters): void => {
        this.sectionParameters = sectionParameters
        this.cdr.markForCheck()
      })
  }
}
