import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
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

  public readUTServices(): Observable<ReadonlyArray<UTService>> {
    return this.uTServicesService.readList()
  }
}

const uTServicesSectionURL = 'https://univt.github.io/student-data/data/sections/ut-services/ut-services-section.json'
