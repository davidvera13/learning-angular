import { Component } from '@angular/core';


// templateUrl: './servers.component.html',
@Component({
  selector: 'app-servers',
  template:
    `<!-- using inline template not html file -->
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
