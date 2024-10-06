import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HowAndWhatWeMakeSectionParameters } from '~composite-sections/how-and-what-we-make/how-and-what-we-make-section.type'

@Injectable({
  providedIn: 'root',
})
export class HowAndWhatWeMakeSectionParametersSectionService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public readSectionParameters(): Observable<HowAndWhatWeMakeSectionParameters> {
    return this.httpClient.get<HowAndWhatWeMakeSectionParameters>(howAndWhatWeMakeSectionURL)
  }
}

const howAndWhatWeMakeSectionURL = 'https://univt.github.io/student-data/data/sections/how-and-what-we-make/how-and-what-we-make-section.json'
