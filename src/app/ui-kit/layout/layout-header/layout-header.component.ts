import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { UniversyTestLogotypeComponent } from '~ui-kit/universytest-logotype/universytest-logotype.component'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    UniversyTestLogotypeComponent,
  ],
  selector: 'app-layout-header',
  standalone: true,
  styleUrls: ['./layout-header.component.sass'],
  templateUrl: './layout-header.component.html',
})
export class LayoutHeaderComponent {
  @Input({ required: true })
  public contactText = 'No data'

  @Input({ required: true })
  public contactURL = 'No data'
}
