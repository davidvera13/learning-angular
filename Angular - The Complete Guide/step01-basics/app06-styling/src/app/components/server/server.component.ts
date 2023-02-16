import {Component} from "@angular/core";

// step 1: create a basic typeScript class
// step 2: add decorator to the class to define it's role
// step 3: setting selector and template url
// step 4: adding ServerComponent to AppModule: the component must be bundled
@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styles: [
    `h4 {
      color: crimson;
    }
    .online {
      color: wheat;
    }

    .offline {
      color: yellow;
    }
    `
  ]
})
export class ServerComponent {
  serverId = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
}
