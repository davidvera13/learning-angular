import { Component } from '@angular/core';
import {DetailsComponent} from "./details/details.component";

@Component({
  standalone: true,
  imports: [DetailsComponent], // we import the component in the component that uses component
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

}
