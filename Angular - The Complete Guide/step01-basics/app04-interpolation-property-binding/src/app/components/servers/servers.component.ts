import {Component, OnInit} from '@angular/core';


// templateUrl: './servers.component.html',
@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowServerCreation = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Server default name...';

  constructor() {
    setTimeout(() => {
      this.allowServerCreation = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = "New server was added: " + this.serverName;
  }

  ngOnInit(): void {
  }

  onUpdateServerName($event: Event) {
    console.log($event);
    this.serverName = (<HTMLInputElement> $event.target).value;
    // output value of the field
  }
}
