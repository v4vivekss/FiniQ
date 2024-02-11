import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WelcomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fini';
}
