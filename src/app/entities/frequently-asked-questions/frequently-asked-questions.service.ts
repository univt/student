import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { FrequentlyAskedQuestion } from '~entities/frequently-asked-questions/frequently-asked-questions.type'

@Injectable({
  providedIn: 'root',
})
export class FrequentlyAskedQuestionsService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public readList(): Observable<ReadonlyArray<FrequentlyAskedQuestion>> {
    return this.httpClient.get<ReadonlyArray<FrequentlyAskedQuestion>>(frequentlyAskedQuestionsURL)
  }
}

const frequentlyAskedQuestionsURL = 'https://univt.github.io/student-data/data/entities/frequently-asked-questions/frequently-asked-questions.json'
