import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { CardModule } from 'primeng/card'
import { UTServicesService } from '~entities/ut-services/ut-services.service'
import { UTService } from '~entities/ut-services/ut-services.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardModule],
  selector: 'app-price-list',
  standalone: true,
  styleUrl: './price-list.component.sass',
  templateUrl: './price-list.component.html',
})
export class PriceListComponent implements OnInit {
  public services: ReadonlyArray<UTService> = []

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly uTServicesService: UTServicesService,
  ) {}

  public ngOnInit(): void {
    this.uTServicesService.getUTServices()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((services: ReadonlyArray<UTService>): void => {
        this.services = services
        this.cdr.markForCheck()
      })
  }
}
