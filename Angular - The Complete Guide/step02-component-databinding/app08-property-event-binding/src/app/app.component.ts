import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: any = [{
    type: "server",
    name: 'testServer',
    content: 'just a test... '
  }];
}
