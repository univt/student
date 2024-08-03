import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { UTServiceCard } from '~entities/ut-services/price-list/ut-service-card.type'
import { UTServicesService } from '~entities/ut-services/ut-services.service'
import { UTServicesSectionService } from './ut-services-section.service'

describe('UTServicesSectionService', (): void => {
  let service: UTServicesSectionService

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: UTServicesService, useClass: UTServicesStubService },
      ],
    })
    service = TestBed.inject(UTServicesSectionService)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})

class UTServicesStubService {
  public readList(): Observable<ReadonlyArray<UTServiceCard>> {
    const services: ReadonlyArray<UTServiceCard> = [
      {
        contactURL: 'service1',
        name: 'Услуга 1',
        priceDescription: 'от 4200 ₽',
      },
      {
        contactURL: 'service2',
        name: 'Услуга 2',
        priceDescription: 'от 1024 ₽',
      },
    ]
    return of(services)
  }
}
