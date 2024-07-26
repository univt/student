import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ImprovementsAndGuaranteesSectionParameters } from '~entities/improvements-and-guarantees/improvements-and-guarantees-section/improvements-and-guarantees-section.type'

@Injectable({
  providedIn: 'root',
})
export class ImprovementsAndGuaranteesSectionService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public readSectionParameters(): Observable<ImprovementsAndGuaranteesSectionParameters> {
    return this.httpClient.get<ImprovementsAndGuaranteesSectionParameters>(improvementsAndGuaranteesSectionURL)
  }
}

const improvementsAndGuaranteesSectionURL = 'https://univt.github.io/student-data/data/sections/improvements-and-guarantees/improvements-and-guarantees-section.json'
