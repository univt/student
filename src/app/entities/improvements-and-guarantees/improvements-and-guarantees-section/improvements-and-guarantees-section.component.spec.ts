import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { ImprovementsAndGuaranteesSectionService } from '~entities/improvements-and-guarantees/improvements-and-guarantees-section/improvements-and-guarantees-section.service'
import { ImprovementsAndGuaranteesSectionParameters } from '~entities/improvements-and-guarantees/improvements-and-guarantees-section/improvements-and-guarantees-section.type'
import { ImprovementsAndGuaranteesSectionComponent } from './improvements-and-guarantees-section.component'

describe('ImprovementsAndGuaranteesSectionComponent', (): void => {
  let component: ImprovementsAndGuaranteesSectionComponent
  let fixture: ComponentFixture<ImprovementsAndGuaranteesSectionComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [ImprovementsAndGuaranteesSectionComponent],
      // Provide the component-under-test and the dependent service.
      providers: [
        ImprovementsAndGuaranteesSectionComponent,
        { provide: ImprovementsAndGuaranteesSectionService, useClass: ImprovementsAndGuaranteesSectionStubService },
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(ImprovementsAndGuaranteesSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})

class ImprovementsAndGuaranteesSectionStubService {
  public readSectionParameters(): Observable<ImprovementsAndGuaranteesSectionParameters> {
    const sectionParameters: ImprovementsAndGuaranteesSectionParameters = {
      description: 'description',
      title: 'title',
    }
    return of(sectionParameters)
  }
}
