import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'app-vk-icon',
  standalone: true,
  styleUrl: './vk-icon.component.sass',
  templateUrl: './vk-icon.component.html',
})
export class VKIconComponent {}
