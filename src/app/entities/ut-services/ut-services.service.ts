import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { UTService } from '~entities/ut-services/ut-services.type'

@Injectable({
  providedIn: 'root',
})
export class UTServicesService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public readList(): Observable<ReadonlyArray<UTService>> {
    return this.httpClient.get<ReadonlyArray<UTService>>(uTServicesURL)
  }
}

const uTServicesURL = 'https://univt.github.io/student-data/data/entities/ut-services/ut-services.json'
