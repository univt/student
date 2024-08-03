import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { UTServiceForAPI } from '~entities/ut-services/ut-services.type'

@Injectable({
  providedIn: 'root',
})
export class UTServicesService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public readList(): Observable<ReadonlyArray<UTServiceForAPI>> {
    return this.httpClient.get<ReadonlyArray<UTServiceForAPI>>(uTServicesURL)
  }
}

const uTServicesURL = 'https://univt.github.io/student-data/data/entities/ut-services/ut-services.json'
