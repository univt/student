import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { MottoSectionParameters } from '~entities/motto/motto-section/motto-section.type'

@Injectable({
  providedIn: 'root',
})
export class MottoSectionService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public readSectionParameters(): Observable<MottoSectionParameters> {
    return this.httpClient.get<MottoSectionParameters>(mottoSectionURL)
  }
}

const mottoSectionURL = 'https://univt.github.io/student-data/data/sections/motto/motto-section.json'
