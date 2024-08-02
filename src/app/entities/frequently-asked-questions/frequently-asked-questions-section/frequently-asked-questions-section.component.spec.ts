import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { Observable, of } from 'rxjs'
import { FrequentlyAskedQuestionsSectionService } from '~entities/frequently-asked-questions/frequently-asked-questions-section/frequently-asked-questions-section.service'
import { FrequentlyAskedQuestionsSectionParameters } from '~entities/frequently-asked-questions/frequently-asked-questions-section/frequently-asked-questions-section.type'
import { FrequentlyAskedQuestion } from '~entities/frequently-asked-questions/frequently-asked-questions.type'
import { FrequentlyAskedQuestionsSectionComponent } from './frequently-asked-questions-section.component'

describe('FrequentlyAskedQuestionsSectionComponent', (): void => {
  let component: FrequentlyAskedQuestionsSectionComponent
  let fixture: ComponentFixture<FrequentlyAskedQuestionsSectionComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [
        // TODO: Do we need to provide something for `FrequentlyAskedQuestionsListComponent`
        //  if the component-under-test and the stubs do not use animations?
        NoopAnimationsModule,

        // Component-under-test.
        FrequentlyAskedQuestionsSectionComponent,

        // Stubs.
        FrequentlyAskedQuestionsListStubComponent,
      ],
      providers: [
        { provide: FrequentlyAskedQuestionsSectionService, useClass: FrequentlyAskedQuestionsSectionStubService },
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

class FrequentlyAskedQuestionsSectionStubService {
  public readFrequentlyAskedQuestions(): Observable<ReadonlyArray<FrequentlyAskedQuestion>> {
    const list: ReadonlyArray<FrequentlyAskedQuestion> = [
      {
        answer: 'Ответ на вопрос №1',
        question: 'Вопрос №1',
      },
      {
        answer: 'Ответ на вопрос №2',
        question: 'Вопрос №2',
      },
    ]
    return of(list)
  }

  public readSectionParameters(): Observable<FrequentlyAskedQuestionsSectionParameters> {
    const sectionParameters: FrequentlyAskedQuestionsSectionParameters = {
      list: {
        emptyStateText: 'No data.',
      },
      title: 'No data',
    }
    return of(sectionParameters)
  }
}
