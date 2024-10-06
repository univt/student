import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { UTPeculiarityCard } from '~entities/ut-peculiarities/ut-peculiarities-list/ut-peculiarities-card.type'
import { UTPeculiaritiesService } from '~entities/ut-peculiarities/ut-peculiarities.service'
import { UTPeculiaritiesSectionService } from './ut-peculiarities-section.service'

describe('UTPeculiaritiesSectionService', (): void => {
  let service: UTPeculiaritiesSectionService

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: UTPeculiaritiesService, useClass: UTPeculiaritiesStubService },
      ],
    })
    service = TestBed.inject(UTPeculiaritiesSectionService)
  })

  it('should be created', (): void => {
    expect(service).toBeTruthy()
  })
})

class UTPeculiaritiesStubService {
  public readList(): Observable<readonly UTPeculiarityCard[]> {
    const utPeculiarities: readonly UTPeculiarityCard[] = [
      {
        description: 'Описание 1',
        name: 'Особенность 1',
      },
      {
        description: 'Описание 2',
        name: 'Особенность 2',
      },
    ]
    return of(utPeculiarities)
  }
}
