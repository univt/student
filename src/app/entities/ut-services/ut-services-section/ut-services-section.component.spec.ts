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
