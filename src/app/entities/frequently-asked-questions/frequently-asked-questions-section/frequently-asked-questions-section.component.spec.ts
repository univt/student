import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FrequentlyAskedQuestionsSectionComponent } from './frequently-asked-questions-section.component'

describe('FrequentlyAskedQuestionsSectionComponent', (): void => {
  let component: FrequentlyAskedQuestionsSectionComponent
  let fixture: ComponentFixture<FrequentlyAskedQuestionsSectionComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [
        // Component-under-test.
        FrequentlyAskedQuestionsSectionComponent,

        // Stubs.
        FrequentlyAskedQuestionsListStubComponent,
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(FrequentlyAskedQuestionsSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})

@Component({ selector: 'app-frequently-asked-questions-list', standalone: true, template: '' })
class FrequentlyAskedQuestionsListStubComponent {}
