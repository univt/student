import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { UTPeculiarityCard } from '~entities/ut-peculiarities/ut-peculiarities-list/ut-peculiarities-card.type'
import { UTPeculiaritiesSectionService } from '~entities/ut-peculiarities/ut-peculiarities-section/ut-peculiarities-section.service'
import { UTPeculiaritiesSectionParameters } from '~entities/ut-peculiarities/ut-peculiarities-section/ut-peculiarities-section.type'
import { UTPeculiaritiesSectionComponent } from './ut-peculiarities-section.component'

describe('UTPeculiaritiesSectionComponent', (): void => {
  let component: UTPeculiaritiesSectionComponent
  let fixture: ComponentFixture<UTPeculiaritiesSectionComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [
        // Component-under-test.
        UTPeculiaritiesSectionComponent,

        // Stubs.
        UTPeculiaritiesListStubComponent,
      ],
      providers: [
        { provide: UTPeculiaritiesSectionService, useClass: UTPeculiaritiesSectionStubService },
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(UTPeculiaritiesSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})

@Component({ selector: 'app-ut-peculiarities-list', standalone: true, template: '' })
class UTPeculiaritiesListStubComponent {}

class UTPeculiaritiesSectionStubService {
  public readSectionParameters(): Observable<UTPeculiaritiesSectionParameters> {
    const sectionParameters: UTPeculiaritiesSectionParameters = {
      list: {
        emptyStateText: 'No data.',
      },
      titleText: 'No data',
    }
    return of(sectionParameters)
  }

  public readUTPeculiarities(): Observable<readonly UTPeculiarityCard[]> {
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
