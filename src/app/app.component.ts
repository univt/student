import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.sass',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'student';
}
