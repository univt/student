import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { UniversyTestLogotypeComponent } from '~ui-kit/universytest-logotype/universytest-logotype.component'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    UniversyTestLogotypeComponent,
  ],
  selector: 'app-layout-hero',
  standalone: true,
  styleUrls: ['./layout-hero.component.sass'],
  templateUrl: './layout-hero.component.html',
})
export class LayoutHeroComponent {
  @Input({ required: true })
  public contactText = 'No data'

  @Input({ required: true })
  public contactURL = 'No data'

  @Input({ required: true })
  public mottoText = 'No data.'

  @Input({ required: true })
  public subtitleText = 'No data'

  @Input({ required: true })
  public titleText = 'No data'
}
