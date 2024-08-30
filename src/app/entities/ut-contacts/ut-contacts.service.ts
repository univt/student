import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { UTContactForAPI } from '~entities/ut-contacts/ut-contacts.type'

@Injectable({
  providedIn: 'root',
})
export class UTContactsService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public readList(): Observable<readonly UTContactForAPI[]> {
    return this.httpClient.get<readonly UTContactForAPI[]>(utContactsURL)
  }
}

const utContactsURL = 'https://univt.github.io/student-data/data/entities/ut-contacts/ut-contacts.json'
