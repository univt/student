import { HttpClient } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { FrequentlyAskedQuestionsService } from './frequently-asked-questions.service'

describe('FrequentlyAskedQuestionsService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: FrequentlyAskedQuestionsService

  beforeEach((): void => {
    TestBed.configureTestingModule({})

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new FrequentlyAskedQuestionsService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
