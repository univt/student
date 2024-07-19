import { HttpClient } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { UTServicesService } from './ut-services.service'

describe('UTServicesService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: UTServicesService

  beforeEach((): void => {
    TestBed.configureTestingModule({})

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new UTServicesService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
