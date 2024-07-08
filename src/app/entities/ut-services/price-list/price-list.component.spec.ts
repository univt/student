import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { UTServicesService } from '~entities/ut-services/ut-services.service'
import { UTService } from '~entities/ut-services/ut-services.type'
import { PriceListComponent } from './price-list.component'

describe('PriceListComponent', (): void => {
  let component: PriceListComponent
  let fixture: ComponentFixture<PriceListComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [PriceListComponent],
      // Provide the component-under-test and the dependent service.
      providers: [
        PriceListComponent,
        { provide: UTServicesService, useClass: UTServicesStubService },
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(PriceListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})

class UTServicesStubService {
  public getUTServices(): Observable<ReadonlyArray<UTService>> {
    const services: ReadonlyArray<UTService> = [
      {
        name: 'Диплом',
        priceDescription: 'от 6000 ₽',
      },
      {
        name: 'Курсовая работа',
        priceDescription: 'от 2700 ₽',
      },
    ]
    return of(services)
  }
}
