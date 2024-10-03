import { HttpClient } from '@angular/common/http'
import { HowAndWhatWeMakeSectionParametersSectionService } from './how-and-what-we-make-section.service'

describe('HowAndWhatWeMakeSectionParametersSectionService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: HowAndWhatWeMakeSectionParametersSectionService

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new HowAndWhatWeMakeSectionParametersSectionService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
