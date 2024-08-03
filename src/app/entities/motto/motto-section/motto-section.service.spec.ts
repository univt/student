import { HttpClient } from '@angular/common/http'
import { MottoSectionService } from './motto-section.service'

describe('MottoSectionService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: MottoSectionService

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new MottoSectionService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
