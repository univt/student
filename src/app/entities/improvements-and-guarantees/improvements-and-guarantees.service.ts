import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ImprovementsAndGuaranteesSection } from '~entities/improvements-and-guarantees/improvements-and-guarantees.type'

@Injectable({
  providedIn: 'root',
})
export class ImprovementsAndGuaranteesService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  public getImprovementsAndGuaranteesSection(): Observable<ImprovementsAndGuaranteesSection> {
    return this.httpClient.get<ImprovementsAndGuaranteesSection>(improvementsAndGuaranteesURL)
  }
}

const improvementsAndGuaranteesURL = 'https://univt.github.io/student-data/data/sections/improvements-and-guarantees/improvements-and-guarantees.json'
