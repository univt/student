import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { ImprovementsAndGuaranteesService } from '~entities/improvements-and-guarantees/improvements-and-guarantees.service'
import { ImprovementsAndGuaranteesSection } from '~entities/improvements-and-guarantees/improvements-and-guarantees.type'
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
        { provide: ImprovementsAndGuaranteesService, useClass: ImprovementsAndGuaranteesStubService },
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

class ImprovementsAndGuaranteesStubService {
  public getImprovementsAndGuaranteesSection(): Observable<ImprovementsAndGuaranteesSection> {
    const section: ImprovementsAndGuaranteesSection = {
      description: 'description',
      title: 'title',
    }
    return of(section)
  }
}
