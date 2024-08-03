import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HeroSectionParameters } from '~composite-sections/hero-section/hero-section.type'

@Injectable({
  providedIn: 'root',
})
export class HeroSectionService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public readSectionParameters(): Observable<HeroSectionParameters> {
    return this.httpClient.get<HeroSectionParameters>(heroSectionURL)
  }
}

const heroSectionURL = 'https://univt.github.io/student-data/data/sections/hero/hero-section.json'
