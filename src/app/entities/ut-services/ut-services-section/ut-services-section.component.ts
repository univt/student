import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { PriceListComponent } from '~entities/ut-services/price-list/price-list.component'
import { UTServiceCard } from '~entities/ut-services/price-list/ut-service-card.type'
import { UTServicesSectionService } from '~entities/ut-services/ut-services-section/ut-services-section.service'
import { UTServicesSectionParameters } from '~entities/ut-services/ut-services-section/ut-services-section.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PriceListComponent],
  selector: 'app-ut-services-section',
  standalone: true,
  styleUrl: './ut-services-section.component.sass',
  templateUrl: './ut-services-section.component.html',
})
export class UTServicesSectionComponent implements OnInit {
  protected utServices: readonly UTServiceCard[] = []
  protected sectionParameters: UTServicesSectionParameters = {
    list: {
      emptyStateText: 'No data.',
      openChatButtonText: 'No data',
    },
    titleText: 'No data',
  }

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly utServicesSectionService: UTServicesSectionService,
  ) {}

  public ngOnInit(): void {
    this.utServicesSectionService.readSectionParameters()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sectionParameters: UTServicesSectionParameters): void => {
        this.sectionParameters = sectionParameters
        this.cdr.markForCheck()
      })
    this.utServicesSectionService.readUTServices()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((utServices: readonly UTServiceCard[]): void => {
        this.utServices = utServices
        this.cdr.markForCheck()
      })
  }
}
