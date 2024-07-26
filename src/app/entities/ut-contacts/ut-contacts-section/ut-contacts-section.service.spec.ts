import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { UTContactsService } from '~entities/ut-contacts/ut-contacts.service'
import { UTContact, UTContactCodename } from '~entities/ut-contacts/ut-contacts.type'
import { UTContactsSectionService } from './ut-contacts-section.service'

describe('UTContactsSectionService', () => {
  let service: UTContactsSectionService

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: UTContactsService, useClass: UTContactsStubService },
      ],
    })
    service = TestBed.inject(UTContactsSectionService)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})

class UTContactsStubService {
  public readList(): Observable<ReadonlyArray<UTContact>> {    const contacts: ReadonlyArray<UTContact> = [
    {
      codename: UTContactCodename.VK,
      name: 'VK',
      url: 'https://vk.com/id1',
    },
    {
      codename: UTContactCodename.VK,
      name: 'VK',
      url: 'https://vk.com/club2',
    },
  ]
  return of(contacts)
  }
}
