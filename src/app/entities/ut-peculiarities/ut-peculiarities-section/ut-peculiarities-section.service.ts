import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { UTPeculiarityCard } from '~entities/ut-peculiarities/ut-peculiarities-list/ut-peculiarities-card.type'
import { UTPeculiaritiesSectionParameters } from '~entities/ut-peculiarities/ut-peculiarities-section/ut-peculiarities-section.type'
import { UTPeculiaritiesService } from '~entities/ut-peculiarities/ut-peculiarities.service'
import { UTPeculiarityForAPI } from '~entities/ut-peculiarities/ut-peculiarities.type'

@Injectable({
  providedIn: 'root',
})
export class UTPeculiaritiesSectionService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly utPeculiaritiesService: UTPeculiaritiesService,
  ) {}

  public readSectionParameters(): Observable<UTPeculiaritiesSectionParameters> {
    return this.httpClient.get<UTPeculiaritiesSectionParameters>(utPeculiaritiesSectionURL)
  }

  public readUTPeculiarities(): Observable<readonly UTPeculiarityCard[]> {
    return this.utPeculiaritiesService.readList()
      .pipe(map(prepareUTPeculiarities))
  }
}

const utPeculiaritiesSectionURL = 'https://univt.github.io/student-data/data/sections/ut-peculiarities/ut-peculiarities-section.json'

function prepareUTPeculiarities(utPeculiarities: readonly UTPeculiarityForAPI[]): readonly UTPeculiarityCard[] {
  return utPeculiarities
}
