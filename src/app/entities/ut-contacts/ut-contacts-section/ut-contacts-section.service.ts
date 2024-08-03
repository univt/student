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
    private readonly uTContactsService: UTContactsService,
  ) {}

  public readSectionParameters(): Observable<UTContactsSectionParameters> {
    return this.httpClient.get<UTContactsSectionParameters>(uTContactsSectionURL)
  }

  public readUTContacts(): Observable<ReadonlyArray<UTContactForAPI>> {
    return this.uTContactsService.readList()
  }
}

const uTContactsSectionURL = 'https://univt.github.io/student-data/data/sections/ut-contacts/ut-contacts-section.json'
