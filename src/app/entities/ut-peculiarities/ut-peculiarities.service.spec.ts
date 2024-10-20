import { HttpClient } from '@angular/common/http'
import { UTPeculiaritiesService } from './ut-peculiarities.service'

describe('UTPeculiaritiesService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: UTPeculiaritiesService

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new UTPeculiaritiesService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
