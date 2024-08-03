import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HeaderSectionParameters } from '~composite-sections/header-section/header-section.type'

@Injectable({
  providedIn: 'root',
})
export class HeaderSectionService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public readSectionParameters(): Observable<HeaderSectionParameters> {
    return this.httpClient.get<HeaderSectionParameters>(headerSectionURL)
  }
}

const headerSectionURL = 'https://univt.github.io/student-data/data/sections/header/header-section.json'
