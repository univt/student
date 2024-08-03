import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-universytest-logotype',
  standalone: true,
  styleUrl: './universytest-logotype.component.sass',
  templateUrl: './universytest-logotype.component.svg',
})
export class UniversyTestLogotypeComponent {}
