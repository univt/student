import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CustomerReviewForAPI } from '~entities/customer-reviews/customer-reviews.type'

@Injectable({
  providedIn: 'root',
})
export class CustomerReviewsService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public readList(): Observable<readonly CustomerReviewForAPI[]> {
    return this.httpClient.get<readonly CustomerReviewForAPI[]>(customerReviewsURL)
  }
}

const customerReviewsURL = 'https://univt.github.io/student-data/data/entities/customer-reviews/customer-reviews.json'
