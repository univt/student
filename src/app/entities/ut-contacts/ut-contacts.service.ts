import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { UTContact } from '~entities/ut-contacts/ut-contacts.type'

@Injectable({
  providedIn: 'root',
})
export class UTContactsService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public getUTContacts(): Observable<ReadonlyArray<UTContact>> {
    return this.httpClient.get<ReadonlyArray<UTContact>>(uTContactsURL)
  }
}

const uTContactsURL = 'https://univt.github.io/student-data/data/entities/ut-contacts/ut-contacts.json'
