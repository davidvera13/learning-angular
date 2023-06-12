import { Component } from '@angular/core';
import {DefaultComponent} from "./components/default/default.component";
import {SignalComponent} from "./components/signal/signal.component";

@Component({
  standalone: true,
  imports: [DefaultComponent, SignalComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app23-signals';
}
