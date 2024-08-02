import { HttpClient } from '@angular/common/http'
import { ImprovementsAndGuaranteesSectionService } from './improvements-and-guarantees-section.service'

describe('ImprovementsAndGuaranteesSectionService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: ImprovementsAndGuaranteesSectionService

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new ImprovementsAndGuaranteesSectionService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
