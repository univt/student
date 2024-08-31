import { ChangeDetectionStrategy, Component } from '@angular/core'
import { HeaderSectionComponent } from "~composite-sections/header-section/header-section.component"
import { HeroSectionComponent } from '~composite-sections/hero-section/hero-section.component'
import { CustomerReviewsSectionComponent } from '~entities/customer-reviews/customer-reviews-section/customer-reviews-section.component'
import { FrequentlyAskedQuestionsSectionComponent } from '~entities/frequently-asked-questions/frequently-asked-questions-section/frequently-asked-questions-section.component'
import { ImprovementsAndGuaranteesSectionComponent } from '~entities/improvements-and-guarantees/improvements-and-guarantees-section/improvements-and-guarantees-section.component'
import { InHouseExpertsSectionComponent } from '~entities/in-house-experts/in-house-experts-section/in-house-experts-section.component'
import { UTContactsSectionComponent } from '~entities/ut-contacts/ut-contacts-section/ut-contacts-section.component'
import { UTServicesSectionComponent } from '~entities/ut-services/ut-services-section/ut-services-section.component'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CustomerReviewsSectionComponent,
    FrequentlyAskedQuestionsSectionComponent,
    HeaderSectionComponent,
    HeroSectionComponent,
    ImprovementsAndGuaranteesSectionComponent,
    InHouseExpertsSectionComponent,
    UTContactsSectionComponent,
    UTServicesSectionComponent,
  ],
  selector: 'app-home-page',
  standalone: true,
  styleUrl: './home-page.component.sass',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
