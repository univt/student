import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { UTContactsService } from '~entities/ut-contacts/ut-contacts.service'
import { UTContact, UTContactCodename } from '~entities/ut-contacts/ut-contacts.type'
import { UTContactsSectionComponent } from './ut-contacts-section.component'

describe('UTContactsSectionComponent', (): void => {
  let component: UTContactsSectionComponent
  let fixture: ComponentFixture<UTContactsSectionComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [UTContactsSectionComponent],
      // Provide the component-under-test and the dependent service.
      providers: [
        UTContactsSectionComponent,
        { provide: UTContactsService, useClass: UTContactsStubService },
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

class UTContactsStubService {
  public getUTContacts(): Observable<ReadonlyArray<UTContact>> {
    const contacts: ReadonlyArray<UTContact> = [
      {
        codename: UTContactCodename.VK,
        name: 'VK',
        url: 'https://vk.com/id1',
      },
      {
        codename: UTContactCodename.VK,
        name: 'VK',
        url: 'https://vk.com/club2',
      },
    ]
    return of(contacts)
  }
}
