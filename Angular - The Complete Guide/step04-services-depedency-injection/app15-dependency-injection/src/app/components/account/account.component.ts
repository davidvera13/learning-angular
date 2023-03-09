import { Component, EventEmitter, Input, Output } from '@angular/core';
import {LoggingService} from "../../services/logging.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers: [ LoggingService ]
  // it is required if we do not defined "provided In root" in the service class.
  // note also that we instantiate a new instance of the service here and won't be inherited from parent component
  // note also that DI is hierarchical, if we instantiante it at root level, a single instance will be shared with child
  // components that inject the dependency
})
export class AccountComponent {
  @Input() account: {name: string, status: string} | undefined;
  @Input() id: number | undefined;
  @Output() statusChanged: EventEmitter<any>;

  constructor(private log: LoggingService, private data: DataService) {
    this.statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  }

  onSetTo(status: string) {
    this.data.updateAccount(this.id!, status);
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // moved to a service layer
    // console.log('A server status changed, new status: ' + status);
    // we can also log in the data service layer also ...
    // this.log.logStatusChange(status)

    // let's emit event that will be regisgtered on new account component
    this.data.statusUpdated.emit(status);
  }
}
