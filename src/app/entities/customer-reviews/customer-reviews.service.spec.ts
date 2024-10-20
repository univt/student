import { HttpClient } from '@angular/common/http'
import { CustomerReviewsService } from './customer-reviews.service'

describe('CustomerReviewsService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: CustomerReviewsService

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new CustomerReviewsService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
