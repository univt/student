import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { MottoSectionService } from '~entities/motto/motto-section/motto-section.service'
import { MottoSectionParameters } from '~entities/motto/motto-section/motto-section.type'
import { MottoSectionComponent } from './motto-section.component'

describe('MottoSectionComponent', (): void => {
  let component: MottoSectionComponent
  let fixture: ComponentFixture<MottoSectionComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      providers: [
        MottoSectionComponent,
        { provide: MottoSectionService, useClass: MottoSectionStubService },
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(MottoSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})

class MottoSectionStubService {
  public readSectionParameters(): Observable<MottoSectionParameters> {
    const sectionParameters: MottoSectionParameters = {
      description: 'description',
    }
    return of(sectionParameters)
  }
}
