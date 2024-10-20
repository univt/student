import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UTPeculiaritiesListComponent } from './ut-peculiarities-list.component'

describe('UTPeculiaritiesListComponent', (): void => {
  let component: UTPeculiaritiesListComponent
  let fixture: ComponentFixture<UTPeculiaritiesListComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [UTPeculiaritiesListComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(UTPeculiaritiesListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
