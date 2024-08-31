import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { CustomerReviewsService } from '~entities/customer-reviews/customer-reviews.service'
import { CustomerReviewForAPI } from '~entities/customer-reviews/customer-reviews.type'
import { CustomerReviewsSectionService } from './customer-reviews-section.service'

describe('CustomerReviewsSectionService', (): void => {
  let service: CustomerReviewsSectionService

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: CustomerReviewsService, useClass: CustomerReviewsStubService },
      ],
    })
    service = TestBed.inject(CustomerReviewsSectionService)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})

class CustomerReviewsStubService {
  public readList(): Observable<readonly CustomerReviewForAPI[]> {
    const customerReviews: readonly CustomerReviewForAPI[] = [
      {
        anonymousCustomerName: 'Иван И.',
        createDate: '2022-02-24T00:00:00+07:00',
        id: 1,
        order: 2,
        reviewParagraphList: ['paragraph'],
      },
      {
        anonymousCustomerName: 'Пётр П.',
        createDate: '2023-02-06T00:00:00+07:00',
        id: 2,
        order: 1,
        reviewParagraphList: ['paragraph 1', 'paragraph 2', 'paragraph 3'],
      },
    ]
    return of(customerReviews)
  }
}
