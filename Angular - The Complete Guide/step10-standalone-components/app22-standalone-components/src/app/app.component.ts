import { Component } from '@angular/core';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {RouterModule} from "@angular/router";

@Component({
  standalone: true,
  imports: [WelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app22-standalone-components';
}
