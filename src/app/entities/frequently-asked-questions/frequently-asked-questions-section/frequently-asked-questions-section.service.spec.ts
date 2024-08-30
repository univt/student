import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { FrequentlyAskedQuestionsService } from '~entities/frequently-asked-questions/frequently-asked-questions.service'
import { FrequentlyAskedQuestion } from '~entities/frequently-asked-questions/frequently-asked-questions.type'
import { FrequentlyAskedQuestionsSectionService } from './frequently-asked-questions-section.service'

describe('FrequentlyAskedQuestionsSectionService', (): void => {
  let service: FrequentlyAskedQuestionsSectionService

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: FrequentlyAskedQuestionsService, useClass: FrequentlyAskedQuestionsStubService },
      ],
    })
    service = TestBed.inject(FrequentlyAskedQuestionsSectionService)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})

class FrequentlyAskedQuestionsStubService {
  public readList(): Observable<readonly FrequentlyAskedQuestion[]> {
    const list: readonly FrequentlyAskedQuestion[] = [
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
