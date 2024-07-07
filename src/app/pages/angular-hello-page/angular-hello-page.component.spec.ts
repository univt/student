import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AngularHelloPageComponent } from './angular-hello-page.component'

describe('AngularHelloPageComponent', (): void => {
  let component: AngularHelloPageComponent
  let fixture: ComponentFixture<AngularHelloPageComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [AngularHelloPageComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(AngularHelloPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
