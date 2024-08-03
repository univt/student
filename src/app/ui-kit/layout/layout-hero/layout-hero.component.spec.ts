import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LayoutHeroComponent } from './layout-hero.component'

describe('LayoutHeroComponent', (): void => {
  let component: LayoutHeroComponent
  let fixture: ComponentFixture<LayoutHeroComponent>

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [LayoutHeroComponent],
    })
    fixture = TestBed.createComponent(LayoutHeroComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
