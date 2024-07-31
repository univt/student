import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { InHouseExpertsSectionParameters } from '~entities/in-house-experts/in-house-experts-section/in-house-experts-section.type'

@Injectable({
  providedIn: 'root',
})
export class InHouseExpertsSectionService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public readSectionParameters(): Observable<InHouseExpertsSectionParameters> {
    return this.httpClient.get<InHouseExpertsSectionParameters>(inHouseExpertsSectionURL)
  }
}

const inHouseExpertsSectionURL = 'https://univt.github.io/student-data/data/sections/in-house-experts/in-house-experts-section.json'
