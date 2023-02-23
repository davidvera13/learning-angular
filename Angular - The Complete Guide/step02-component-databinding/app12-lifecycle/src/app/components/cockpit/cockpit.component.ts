import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output('serverCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string}>();

  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() {
    // @ts-ignore
    this.serverContentInput = new ElementRef<any>();
  }


  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    console.log(this.serverContentInput.nativeElement.value);
    console.log(serverNameInput.value)
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    console.log(this.serverContentInput.nativeElement.value);
    this.blueprintCreated.emit({
      blueprintName: serverNameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    })
    // this.blueprintCreated.emit({
    //   blueprintName: this.newServerName,
    //   blueprintContent: this.newServerContent
    // })
  }
}
