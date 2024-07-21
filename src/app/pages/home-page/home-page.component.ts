import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FrequentlyAskedQuestionsSectionComponent } from '~entities/frequently-asked-questions/frequently-asked-questions-section/frequently-asked-questions-section.component'
import { UTContactsSectionComponent } from '~entities/ut-contacts/ut-contacts-section/ut-contacts-section.component'
import { UTServicesSectionComponent } from '~entities/ut-services/ut-services-section/ut-services-section.component'

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
      FrequentlyAskedQuestionsSectionComponent,
      UTServicesSectionComponent,
      UTContactsSectionComponent,
    ],
    selector: 'app-home-page',
    standalone: true,
    styleUrl: './home-page.component.sass',
    templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
