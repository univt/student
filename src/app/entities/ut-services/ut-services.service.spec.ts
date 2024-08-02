import { HttpClient } from '@angular/common/http'
import { UTServicesService } from './ut-services.service'

describe('UTServicesService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: UTServicesService

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new UTServicesService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
