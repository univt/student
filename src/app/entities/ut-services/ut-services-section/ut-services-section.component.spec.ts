import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { UTServiceCard } from '~entities/ut-services/price-list/ut-service-card.type'
import { UTServicesSectionService } from '~entities/ut-services/ut-services-section/ut-services-section.service'
import { UTServicesSectionParameters } from '~entities/ut-services/ut-services-section/ut-services-section.type'
import { UTServicesSectionComponent } from './ut-services-section.component'

describe('UTServicesSectionComponent', (): void => {
  let component: UTServicesSectionComponent
  let fixture: ComponentFixture<UTServicesSectionComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [
        // Component-under-test.
        UTServicesSectionComponent,

        // Stubs.
        PriceListStubComponent,
      ],
      providers: [
        { provide: UTServicesSectionService, useClass: UTServicesSectionStubService },
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(UTServicesSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})

@Component({ selector: 'app-price-list', standalone: true, template: '' })
class PriceListStubComponent {}

class UTServicesSectionStubService {
  public readSectionParameters(): Observable<UTServicesSectionParameters> {
    const sectionParameters: UTServicesSectionParameters = {
      list: {
        emptyStateText: 'No data.',
      },
      titleText: 'No data',
    }
    return of(sectionParameters)
  }

  public readUTServices(): Observable<readonly UTServiceCard[]> {
    const services: readonly UTServiceCard[] = [
      {
        codename: 'service1',
        contactURL: 'service1',
        name: 'Услуга 1',
        priceDescription: 'от 4200 ₽',
      },
      {
        codename: 'service2',
        contactURL: 'service2',
        name: 'Услуга 2',
        priceDescription: 'от 1024 ₽',
      },
    ]
    return of(services)
  }
}
