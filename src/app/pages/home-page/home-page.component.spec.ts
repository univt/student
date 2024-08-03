import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HomePageComponent } from './home-page.component'

describe('HomePageComponent', (): void => {
  let component: HomePageComponent
  let fixture: ComponentFixture<HomePageComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [
        // Component-under-test.
        HomePageComponent,

        // Stubs.
        FrequentlyAskedQuestionsSectionStubComponent,
        ImprovementsAndGuaranteesSectionStubComponent,
        MottoSectionStubComponent,
        UTContactsSectionStubComponent,
        UTServicesSectionStubComponent,
      ],
      // TODO: Do we need to provide something for `HttpClient`
      //  if the component-under-test and the stubs do not use `HttpClient`?
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(HomePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})

@Component({ selector: 'app-frequently-asked-questions-section', standalone: true, template: '' })
class FrequentlyAskedQuestionsSectionStubComponent {}

@Component({ selector: 'app-improvements-and-guarantees-section', standalone: true, template: '' })
class ImprovementsAndGuaranteesSectionStubComponent {}

@Component({ selector: 'app-motto-section', standalone: true, template: '' })
class MottoSectionStubComponent {}

@Component({ selector: 'app-ut-contacts-section', standalone: true, template: '' })
class UTContactsSectionStubComponent {}

@Component({ selector: 'app-ut-services-section', standalone: true, template: '' })
class UTServicesSectionStubComponent {}
