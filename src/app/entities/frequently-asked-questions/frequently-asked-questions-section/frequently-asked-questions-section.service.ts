import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { FrequentlyAskedQuestionsSectionParameters } from '~entities/frequently-asked-questions/frequently-asked-questions-section/frequently-asked-questions-section.type'
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

  public readFrequentlyAskedQuestions(): Observable<ReadonlyArray<FrequentlyAskedQuestion>> {
    return this.frequentlyAskedQuestionsService.readList()
  }

  public readSectionParameters(): Observable<FrequentlyAskedQuestionsSectionParameters> {
    return this.httpClient.get<FrequentlyAskedQuestionsSectionParameters>(frequentlyAskedQuestionsSectionURL)
  }
}

const frequentlyAskedQuestionsSectionURL = 'https://univt.github.io/student-data/data/sections/frequently-asked-questions/frequently-asked-questions-section.json'
