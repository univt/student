import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable, of } from 'rxjs'
import { CustomerReviewsSectionService } from '~entities/customer-reviews/customer-reviews-section/customer-reviews-section.service'
import { CustomerReviewsSectionParameters } from '~entities/customer-reviews/customer-reviews-section/customer-reviews-section.type'
import { CustomerReviewForAPI } from '~entities/customer-reviews/customer-reviews.type'
import { CustomerReviewsSectionComponent } from './customer-reviews-section.component'

describe('CustomerReviewsSectionComponent', (): void => {
  let component: CustomerReviewsSectionComponent
  let fixture: ComponentFixture<CustomerReviewsSectionComponent>

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      providers: [
        CustomerReviewsSectionComponent,
        { provide: CustomerReviewsSectionService, useClass: CustomerReviewsSectionStubService },
      ],
    })
      .compileComponents()

    fixture = TestBed.createComponent(CustomerReviewsSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', (): void => {
    expect(component).toBeTruthy()
  })
})

class CustomerReviewsSectionStubService {
  public readSectionParameters(): Observable<CustomerReviewsSectionParameters> {
    const sectionParameters: CustomerReviewsSectionParameters = {
      list: {
        emptyStateText: 'No data.',
      },
      titleText: 'No data',
    }
    return of(sectionParameters)
  }

  public readCustomerReviews(): Observable<readonly CustomerReviewForAPI[]> {
    const customerReviews: readonly CustomerReviewForAPI[] = [
      {
        anonymousCustomerName: 'Иван И.',
        createDate: '2022-02-24T00:00:00+07:00',
        id: 1,
        order: 2,
        reviewParagraphList: ['paragraph'],
      },
      {
        anonymousCustomerName: 'Пётр П.',
        createDate: '2023-02-06T00:00:00+07:00',
        id: 2,
        order: 1,
        reviewParagraphList: ['paragraph 1', 'paragraph 2', 'paragraph 3'],
      },
    ]
    return of(customerReviews)
  }
}
