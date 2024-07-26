import { HttpClient } from '@angular/common/http'
import { UTContactsService } from './ut-contacts.service'

describe('UTContactsService', (): void => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>
  let service: UTContactsService

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new UTContactsService(httpClientSpy)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})
