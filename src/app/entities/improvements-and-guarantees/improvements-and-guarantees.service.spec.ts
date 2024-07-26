import { HttpClient } from '@angular/common/http'
import { ImprovementsAndGuaranteesService } from './improvements-and-guarantees.service'

describe('ImprovementsAndGuaranteesService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: ImprovementsAndGuaranteesService

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new ImprovementsAndGuaranteesService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
