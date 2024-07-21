import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
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
      // TODO: Do we need to provide something for `HttpClient`
      //  if the component-under-test and the stubs do not use `HttpClient`?
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
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
