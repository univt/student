import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { CustomerReviewsSectionParameters } from '~entities/customer-reviews/customer-reviews-section/customer-reviews-section.type'
import { CustomerReviewsService } from '~entities/customer-reviews/customer-reviews.service'
import { CustomerReviewForAPI } from '~entities/customer-reviews/customer-reviews.type'

@Injectable({
  providedIn: 'root',
})
export class CustomerReviewsSectionService {
  constructor(
    private readonly customerReviewsService: CustomerReviewsService,
    private readonly httpClient: HttpClient,
  ) {}

  public readSectionParameters(): Observable<CustomerReviewsSectionParameters> {
    return this.httpClient.get<CustomerReviewsSectionParameters>(customerReviewsSectionURL)
  }

  public readCustomerReviews(): Observable<readonly CustomerReviewForAPI[]> {
    return this.customerReviewsService.readList()
  }
}

const customerReviewsSectionURL = 'https://univt.github.io/student-data/data/sections/customer-reviews/customer-reviews-section.json'
