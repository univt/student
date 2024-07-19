import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-instagram-icon',
  standalone: true,
  styleUrl: './instagram-icon.component.sass',
  templateUrl: './instagram-icon.component.html',
})
export class InstagramIconComponent {}
