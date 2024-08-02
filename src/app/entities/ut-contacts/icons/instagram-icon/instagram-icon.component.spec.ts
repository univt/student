import { ComponentFixture, TestBed } from '@angular/core/testing'
import { InstagramIconComponent } from './instagram-icon.component'

describe('InstagramIconComponent', (): void => {
  let component: InstagramIconComponent
  let fixture: ComponentFixture<InstagramIconComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [InstagramIconComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(InstagramIconComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
