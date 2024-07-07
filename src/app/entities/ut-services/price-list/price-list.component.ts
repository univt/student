import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { CardModule } from 'primeng/card'
import { UTService } from '~entities/ut-services/ut-services.type'
import { UTServicesService } from '../ut-services.service'

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

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly uTServicesService: UTServicesService,
    
  ) {}

  public ngOnInit(): void {
    this.uTServicesService.getUTServices()
      .subscribe((services: ReadonlyArray<UTService>): void => {
        this.services = services
        this.cdr.markForCheck()
      })
  }
}
