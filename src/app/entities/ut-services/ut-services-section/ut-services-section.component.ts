import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { PriceListComponent } from '~entities/ut-services/price-list/price-list.component'
import { UTServicesSectionService } from '~entities/ut-services/ut-services-section/ut-services-section.service'
import { UTServicesSectionParameters } from '~entities/ut-services/ut-services-section/ut-services-section.type'
import { UTService } from '~entities/ut-services/ut-services.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PriceListComponent],
  selector: 'app-ut-services-section',
  standalone: true,
  styleUrl: './ut-services-section.component.sass',
  templateUrl: './ut-services-section.component.html',
})
export class UTServicesSectionComponent implements OnInit {
  public uTServices: ReadonlyArray<UTService> = []
  public sectionParameters: UTServicesSectionParameters = {
    list: {
      emptyStateText: 'No data.',
    },
    title: 'No data',
  }

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly uTServicesSectionService: UTServicesSectionService,
  ) {}

  public ngOnInit(): void {
    this.uTServicesSectionService.readSectionParameters()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sectionParameters: UTServicesSectionParameters): void => {
        this.sectionParameters = sectionParameters
        this.cdr.markForCheck()
      })
    this.uTServicesSectionService.readUTServices()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((uTServices: ReadonlyArray<UTService>): void => {
        this.uTServices = uTServices
        this.cdr.markForCheck()
      })
  }
}
