import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { Observable, of } from 'rxjs'
import { FrequentlyAskedQuestionsService } from '~entities/frequently-asked-questions/frequently-asked-questions.service'
import { FrequentlyAskedQuestion } from '~entities/frequently-asked-questions/frequently-asked-questions.type'
import { FrequentlyAskedQuestionsListComponent } from './frequently-asked-questions-list.component'

describe('FrequentlyAskedQuestionsListComponent', (): void => {
  let component: FrequentlyAskedQuestionsListComponent
  let fixture: ComponentFixture<FrequentlyAskedQuestionsListComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,

        // Component-under-test.
        FrequentlyAskedQuestionsListComponent,
      ],
      // Provide the component-under-test and the dependent service.
      providers: [
        FrequentlyAskedQuestionsListComponent,
        { provide: FrequentlyAskedQuestionsService, useClass: FrequentlyAskedQuestionsStubService },
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(FrequentlyAskedQuestionsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})

class FrequentlyAskedQuestionsStubService {
  public getFrequentlyAskedQuestions(): Observable<ReadonlyArray<FrequentlyAskedQuestion>> {
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
}
