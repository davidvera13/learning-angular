import { Component } from '@angular/core';
import {DefaultComponent} from "./components/default/default.component";

@Component({
  standalone: true,
  imports: [DefaultComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app23-signals';
}
