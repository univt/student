import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { HeaderSectionService } from '~composite-sections/header-section/header-section.service'
import { HeaderSectionParameters } from '~composite-sections/header-section/header-section.type'
import { HeaderSectionComponent } from './header-section.component'

describe('HeaderSectionComponent', (): void => {
  let component: HeaderSectionComponent
  let fixture: ComponentFixture<HeaderSectionComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      providers: [
        HeaderSectionComponent,
        { provide: HeaderSectionService, useClass: HeaderSectionStubService },
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(HeaderSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})

class HeaderSectionStubService {
  public readSectionParameters(): Observable<HeaderSectionParameters> {
    const sectionParameters: HeaderSectionParameters = {
      contactText: 'contactText',
      contactURL: 'contactURL',
    }
    return of(sectionParameters)
  }
}
