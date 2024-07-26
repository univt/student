import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { FrequentlyAskedQuestionSectionParameters } from '~entities/frequently-asked-questions/frequently-asked-questions-section/frequently-asked-questions-section.type'
import { FrequentlyAskedQuestionsService } from '~entities/frequently-asked-questions/frequently-asked-questions.service'
import { FrequentlyAskedQuestion } from '~entities/frequently-asked-questions/frequently-asked-questions.type'

@Injectable({
  providedIn: 'root',
})
export class FrequentlyAskedQuestionsSectionService {
  constructor(
    private readonly frequentlyAskedQuestionsService: FrequentlyAskedQuestionsService,
    private readonly httpClient: HttpClient,
  ) {}

  public getFrequentlyAskedQuestions(): Observable<ReadonlyArray<FrequentlyAskedQuestion>> {
    return this.frequentlyAskedQuestionsService.getFrequentlyAskedQuestions()
  }

  public getSectionParameters(): Observable<FrequentlyAskedQuestionSectionParameters> {
    return this.httpClient.get<FrequentlyAskedQuestionSectionParameters>(frequentlyAskedQuestionsSectionURL)
  }
}

const frequentlyAskedQuestionsSectionURL = 'https://univt.github.io/student-data/data/sections/frequently-asked-questions/frequently-asked-questions-section.json'
