import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-angular-hello',
  standalone: true,
  styleUrl: './angular-hello.component.sass',
  templateUrl: './angular-hello.component.html',
})
export class AngularHelloComponent {
  public readonly title = 'student'
}
