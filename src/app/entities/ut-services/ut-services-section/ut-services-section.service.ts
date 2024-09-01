import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { newDevError } from '~app/dev/dev-error.util'
import { UTServiceCard } from '~entities/ut-services/price-list/ut-service-card.type'
import { UTServicesSectionParameters } from '~entities/ut-services/ut-services-section/ut-services-section.type'
import { UTServicesService } from '~entities/ut-services/ut-services.service'
import { UTServiceForAPI } from '~entities/ut-services/ut-services.type'

@Injectable({
  providedIn: 'root',
})
export class UTServicesSectionService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly utServicesService: UTServicesService,
  ) {}

  public readSectionParameters(): Observable<UTServicesSectionParameters> {
    return this.httpClient.get<UTServicesSectionParameters>(utServicesSectionURL)
  }

  public readUTServices(): Observable<readonly UTServiceCard[]> {
    return this.utServicesService.readList()
      .pipe(map(prepareUTServices))
  }
}

const utServicesSectionURL = 'https://univt.github.io/student-data/data/sections/ut-services/ut-services-section.json'

function prepareUTServices(utServices: readonly UTServiceForAPI[]): readonly UTServiceCard[] {
  const utServicesMap = new Map<number, UTServiceCard>()
  utServices.forEach(({
    codename,
    contactURL,
    name,
    order,
    priceDescription,
  }: UTServiceForAPI): void => {
    utServicesMap.set(order, {
      codename,
      contactURL,
      name,
      priceDescription,
    })
  })
  const result: UTServiceCard[] = []
  for (let i = 1; i <= utServicesMap.size; ++i) {
    const card = utServicesMap.get(i)
    if (!card) {
      throw newDevError('Wrong data. Check the values of `order` properties.')
    }
    result.push(card)
  }
  return result
}
