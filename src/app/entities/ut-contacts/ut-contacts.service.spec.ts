import { HttpClient } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { UTContactsService } from './ut-contacts.service'

describe('UTContactsService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: UTContactsService

  beforeEach((): void => {
    TestBed.configureTestingModule({})

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new UTContactsService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
