import { HttpClient } from '@angular/common/http'
import { InHouseExpertsSectionService } from './in-house-experts-section.service'

describe('InHouseExpertsSectionService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: InHouseExpertsSectionService

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new InHouseExpertsSectionService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
