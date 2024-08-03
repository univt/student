import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { UTServiceCard } from '~entities/ut-services/price-list/ut-service-card.type'
import { UTServicesSectionParameters } from '~entities/ut-services/ut-services-section/ut-services-section.type'
import { UTServicesService } from '~entities/ut-services/ut-services.service'
import { UTService } from '~entities/ut-services/ut-services.type'

@Injectable({
  providedIn: 'root',
})
export class UTServicesSectionService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly uTServicesService: UTServicesService,
  ) {}

  public readSectionParameters(): Observable<UTServicesSectionParameters> {
    return this.httpClient.get<UTServicesSectionParameters>(uTServicesSectionURL)
  }

  public readUTServices(): Observable<ReadonlyArray<UTServiceCard>> {
    return this.uTServicesService.readList()
      .pipe(map(prepareUTServices))
  }
}

const uTServicesSectionURL = 'https://univt.github.io/student-data/data/sections/ut-services/ut-services-section.json'

function prepareUTServices(uTServices: ReadonlyArray<UTService>): ReadonlyArray<UTServiceCard> {
  return uTServices
    .map((uTServices: UTService) => ({ ...uTServices }))
    .sort((a: UTService, b: UTService): number => a.order - b.order)
    .map(({
      contactURL,
      name,
      priceDescription,
    }: UTService): UTServiceCard => {
      return {
        contactURL,
        name,
        priceDescription,
      }
    })
}
