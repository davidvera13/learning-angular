import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('serverCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string}>();

  serverElements: any = [];
  newServerName = '';
  newServerContent = '';

  onAddServer(serverNameInput: HTMLInputElement, serverContent: HTMLInputElement) {
    console.log(serverNameInput.value)
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: serverContent.value
    });
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement, serverContent: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: serverNameInput.value,
      blueprintContent: serverContent.value
    })
    // this.blueprintCreated.emit({
    //   blueprintName: this.newServerName,
    //   blueprintContent: this.newServerContent
    // })
  }
}
