import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { InHouseExpertsSectionService } from '~entities/in-house-experts/in-house-experts-section/in-house-experts-section.service'
import { InHouseExpertsSectionParameters } from '~entities/in-house-experts/in-house-experts-section/in-house-experts-section.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-in-house-experts-section',
  standalone: true,
  styleUrl: './in-house-experts-section.component.sass',
  templateUrl: './in-house-experts-section.component.html',
})
export class InHouseExpertsSectionComponent implements OnInit {
  public sectionParameters: InHouseExpertsSectionParameters = {
    description: 'No data.',
  }

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly inHouseExpertsSectionService: InHouseExpertsSectionService,
  ) {}

  public ngOnInit(): void {
    this.inHouseExpertsSectionService.readSectionParameters()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sectionParameters: InHouseExpertsSectionParameters): void => {
        this.sectionParameters = sectionParameters
        this.cdr.markForCheck()
      })
  }
}
