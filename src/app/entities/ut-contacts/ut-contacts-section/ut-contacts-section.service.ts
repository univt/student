import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { UTContactsSectionParameters } from '~entities/ut-contacts/ut-contacts-section/ut-contacts-section.type'
import { UTContactsService } from '~entities/ut-contacts/ut-contacts.service'
import { UTContactForAPI } from '~entities/ut-contacts/ut-contacts.type'

@Injectable({
  providedIn: 'root',
})
export class UTContactsSectionService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly utContactsService: UTContactsService,
  ) {}

  public readSectionParameters(): Observable<UTContactsSectionParameters> {
    return this.httpClient.get<UTContactsSectionParameters>(utContactsSectionURL)
  }

  public readUTContacts(): Observable<readonly UTContactForAPI[]> {
    return this.utContactsService.readList()
  }
}

const utContactsSectionURL = 'https://univt.github.io/student-data/data/sections/ut-contacts/ut-contacts-section.json'
