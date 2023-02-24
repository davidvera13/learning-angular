import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';
  feature: string;

  constructor() {
    // let define a default "page"
    this.feature = 'recipes';

  }


  onNavigate(feature: string) {
    this.feature = feature;
  }
}
