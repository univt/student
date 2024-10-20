export interface CustomerReviewForAPI {
  readonly anonymousCustomerName: string
  readonly createDate: string
  readonly id: number
  readonly order: number
  readonly reviewParagraphList: readonly string[]
}
