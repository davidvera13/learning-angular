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


  // will be triggered after the server is added
  onServerAdded(serverData: {serverName: string, serverContent: string} ) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // will be triggered after the blueprint is added
  onBluePrintAdded(bluePrintData: {blueprintName: string, blueprintContent: string} ) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.blueprintName,
      content: bluePrintData.blueprintContent
    });
  }

}
