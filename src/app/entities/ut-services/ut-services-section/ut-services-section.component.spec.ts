import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { UTServicesSectionService } from '~entities/ut-services/ut-services-section/ut-services-section.service'
import { UTServicesSectionParameters } from '~entities/ut-services/ut-services-section/ut-services-section.type'
import { UTService } from '~entities/ut-services/ut-services.type'
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
      title: 'No data',
    }
    return of(sectionParameters)
  }

  public readUTServices(): Observable<ReadonlyArray<UTService>> {
    const services: ReadonlyArray<UTService> = [
      {
        name: 'Услуга 1',
        priceDescription: 'от 4200 ₽',
      },
      {
        name: 'Услуга 2',
        priceDescription: 'от 1024 ₽',
      },
    ]
    return of(services)
  }
}
