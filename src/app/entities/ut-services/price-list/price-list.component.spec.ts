import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PriceListComponent } from './price-list.component'

describe('PriceListComponent', (): void => {
  let component: PriceListComponent
  let fixture: ComponentFixture<PriceListComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [PriceListComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(PriceListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
