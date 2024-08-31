import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { CarouselModule } from 'primeng/carousel'
import { newDevError } from '~app/dev/dev-error.util'
import { CustomerReviewsSectionService } from '~entities/customer-reviews/customer-reviews-section/customer-reviews-section.service'
import { CustomerReviewsSectionParameters } from '~entities/customer-reviews/customer-reviews-section/customer-reviews-section.type'
import { CustomerReviewForAPI } from '~entities/customer-reviews/customer-reviews.type'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CarouselModule],
  selector: 'app-customer-reviews-section',
  standalone: true,
  styleUrl: './customer-reviews-section.component.sass',
  templateUrl: './customer-reviews-section.component.html',
})
export class CustomerReviewsSectionComponent implements OnInit {
  // TODO: Organize the magic numbers for the breakpoints.
  protected carouselResponsiveOptions = [
    {
        breakpoint: '767px',
        numScroll: 1,
        numVisible: 1,
    },
    {
        breakpoint: '991px',
        numScroll: 1,
        numVisible: 2,
    },
    {
        breakpoint: '1199px',
        numScroll: 1,
        numVisible: 3,
    },
    {
        breakpoint: '42000px',
        numScroll: 1,
        numVisible: 4,
    },
  ]
  protected customerReviews: CustomerReviewForTemplate[] = []
  protected sectionParameters: CustomerReviewsSectionParameters = {
    list: {
      emptyStateText: 'No data.',
    },
    title: 'No data',
  }

  private readonly destroyRef = inject(DestroyRef)

  constructor(
    private readonly cdr: ChangeDetectorRef,
    private readonly customerReviewsSectionService: CustomerReviewsSectionService,
  ) {}

  public ngOnInit(): void {
    this.customerReviewsSectionService.readSectionParameters()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sectionParameters: CustomerReviewsSectionParameters): void => {
        this.sectionParameters = sectionParameters
        this.cdr.markForCheck()
      })
    this.customerReviewsSectionService.readCustomerReviews()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((customerReviews: readonly CustomerReviewForAPI[]): void => {
        this.customerReviews = prepareCustomerReviewsForTemplate(customerReviews) as CustomerReviewForTemplate[]
        this.cdr.markForCheck()
      })
  }
}

interface CustomerReviewForTemplate {
  readonly anonymousCustomerName: CustomerReviewForAPI['anonymousCustomerName']
  readonly createDateDateTime: CustomerReviewForAPI['createDate']
  readonly createDateText: string
  readonly id: CustomerReviewForAPI['id']
  readonly reviewParagraphList: CustomerReviewForAPI['reviewParagraphList']
}

function prepareCustomerReviewForTemplate({
  anonymousCustomerName,
  createDate,
  id,
  reviewParagraphList,
}: CustomerReviewForAPI): CustomerReviewForTemplate {
  const date = new Date(createDate)
  return {
    anonymousCustomerName,
    createDateDateTime: createDate,
    createDateText: date.toLocaleDateString(),
    id,
    reviewParagraphList: [...reviewParagraphList],
  }
}

function prepareCustomerReviewsForTemplate(customerReviews: readonly CustomerReviewForAPI[]): readonly CustomerReviewForTemplate[] {
  const customerReviewsMap = new Map<number, CustomerReviewForTemplate>()
  customerReviews.forEach((customerReview: CustomerReviewForAPI): void => {
    customerReviewsMap.set(customerReview.order, prepareCustomerReviewForTemplate(customerReview))
  })
  const result: CustomerReviewForTemplate[] = []
  for (let i = 1; i <= customerReviewsMap.size; ++i) {
    const customerReview = customerReviewsMap.get(i)
    if (!customerReview) {
      throw newDevError('Wrong data. Check the values of `order` properties.')
    }
    result.push(customerReview)
  }
  return result
}
