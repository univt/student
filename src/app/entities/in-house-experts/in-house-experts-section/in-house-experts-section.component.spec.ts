import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { InHouseExpertsSectionService } from '~entities/in-house-experts/in-house-experts-section/in-house-experts-section.service'
import { InHouseExpertsSectionParameters } from '~entities/in-house-experts/in-house-experts-section/in-house-experts-section.type'
import { InHouseExpertsSectionComponent } from './in-house-experts-section.component'

describe('InHouseExpertsSectionComponent', (): void => {
  let component: InHouseExpertsSectionComponent
  let fixture: ComponentFixture<InHouseExpertsSectionComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      providers: [
        InHouseExpertsSectionComponent,
        { provide: InHouseExpertsSectionService, useClass: InHouseExpertsSectionStubService },
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(InHouseExpertsSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})

class InHouseExpertsSectionStubService {
  public readSectionParameters(): Observable<InHouseExpertsSectionParameters> {
    const sectionParameters: InHouseExpertsSectionParameters = {
      description: 'description',
    }
    return of(sectionParameters)
  }
}
