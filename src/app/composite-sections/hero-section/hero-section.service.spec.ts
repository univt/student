import { HttpClient } from '@angular/common/http'
import { HeroSectionService } from './hero-section.service'

describe('HeroSectionService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: HeroSectionService

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new HeroSectionService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
