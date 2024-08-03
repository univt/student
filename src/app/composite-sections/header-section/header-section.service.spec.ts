import { HttpClient } from '@angular/common/http'
import { HeaderSectionService } from './header-section.service'

describe('HeaderSectionService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: HeaderSectionService

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new HeaderSectionService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
