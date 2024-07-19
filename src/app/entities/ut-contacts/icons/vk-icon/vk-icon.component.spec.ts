import { ComponentFixture, TestBed } from '@angular/core/testing'
import { VKIconComponent } from './vk-icon.component'

describe('VKIconComponent', (): void => {
  let component: VKIconComponent
  let fixture: ComponentFixture<VKIconComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [VKIconComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(VKIconComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
