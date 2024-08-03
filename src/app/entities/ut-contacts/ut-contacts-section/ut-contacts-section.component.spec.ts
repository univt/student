import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { UTContactsSectionService } from '~entities/ut-contacts/ut-contacts-section/ut-contacts-section.service'
import { UTContactsSectionParameters } from '~entities/ut-contacts/ut-contacts-section/ut-contacts-section.type'
import { UTContactForAPI, UTContactCodename } from '~entities/ut-contacts/ut-contacts.type'
import { UTContactsSectionComponent } from './ut-contacts-section.component'

describe('UTContactsSectionComponent', (): void => {
  let component: UTContactsSectionComponent
  let fixture: ComponentFixture<UTContactsSectionComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      providers: [
        UTContactsSectionComponent,
        { provide: UTContactsSectionService, useClass: UTContactsSectionStubService },
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(UTContactsSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})

class UTContactsSectionStubService {
  public readSectionParameters(): Observable<UTContactsSectionParameters> {
    const sectionParameters: UTContactsSectionParameters = {
      list: {
        emptyStateText: 'No data.',
      },
      title: 'No data',
    }
    return of(sectionParameters)
  }

  public readUTContacts(): Observable<ReadonlyArray<UTContactForAPI>> {
    const contacts: ReadonlyArray<UTContactForAPI> = [
      {
        codename: UTContactCodename.VK,
        name: 'VK',
        order: 2,
        url: 'https://vk.com/id1',
      },
      {
        codename: UTContactCodename.VK,
        name: 'VK',
        order: 1,
        url: 'https://vk.com/club2',
      },
    ]
    return of(contacts)
  }
}
