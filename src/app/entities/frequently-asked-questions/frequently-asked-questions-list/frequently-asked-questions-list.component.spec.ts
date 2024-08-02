import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { FrequentlyAskedQuestionsListComponent } from './frequently-asked-questions-list.component'

describe('FrequentlyAskedQuestionsListComponent', (): void => {
  let component: FrequentlyAskedQuestionsListComponent
  let fixture: ComponentFixture<FrequentlyAskedQuestionsListComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,

        // Component-under-test.
        FrequentlyAskedQuestionsListComponent,
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(FrequentlyAskedQuestionsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})
