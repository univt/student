import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AngularHelloComponent } from './angular-hello.component'

describe('AngularHelloComponent', (): void => {
  let component: AngularHelloComponent
  let fixture: ComponentFixture<AngularHelloComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [AngularHelloComponent],
    })
      .compileComponents()

    fixture = TestBed.createComponent(AngularHelloComponent)
    component = fixture.componentInstance
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })

  it(`should have the 'student' title`, (): void => {
    expect(component.title).toEqual('student')
  })

  it('should render title', (): void => {
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, student')
  })
})
