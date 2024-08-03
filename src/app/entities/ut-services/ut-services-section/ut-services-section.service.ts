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
  const uTServicesMap = new Map<number, UTServiceCard>()
  uTServices.forEach(({
    contactURL,
    name,
    order,
    priceDescription,
  }: UTService): void => {
    uTServicesMap.set(order, {
      contactURL,
      name,
      priceDescription,
    })
  })
  const result: UTServiceCard[] = []
  for (let i = 1; i <= uTServicesMap.size; ++i) {
    const card = uTServicesMap.get(i)
    if (!card) {
      throw Error('Wrong data. Check the values of `order` properties.')
    }
    result.push(card)
  }
  return result
}
