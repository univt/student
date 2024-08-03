import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { HeroSectionService } from '~composite-sections/hero-section/hero-section.service'
import { HeroSectionParameters } from '~composite-sections/hero-section/hero-section.type'
import { HeroSectionComponent } from './hero-section.component'

describe('HeroSectionComponent', (): void => {
  let component: HeroSectionComponent
  let fixture: ComponentFixture<HeroSectionComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      providers: [
        HeroSectionComponent,
        { provide: HeroSectionService, useClass: HeroSectionStubService },
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(HeroSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})

class HeroSectionStubService {
  public readSectionParameters(): Observable<HeroSectionParameters> {
    const sectionParameters: HeroSectionParameters = {
      contactText: 'contactText',
      contactURL: 'contactURL',
      mottoText: 'mottoText',
      organizationDescriptionText: 'organizationDescriptionText',
      organizationTitleText: 'organizationTitleText',
    }
    return of(sectionParameters)
  }
}
