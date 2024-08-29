import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UniversyTestLogotypeComponent } from './universytest-logotype.component'

describe('UniversyTestLogotypeComponent', (): void => {
  let component: UniversyTestLogotypeComponent
  let fixture: ComponentFixture<UniversyTestLogotypeComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [UniversyTestLogotypeComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(UniversyTestLogotypeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
