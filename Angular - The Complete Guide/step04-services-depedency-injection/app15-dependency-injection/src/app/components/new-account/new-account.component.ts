import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from "../../services/logging.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private log: LoggingService, private data: DataService) {
    this.data.statusUpdated.subscribe((status: string) => alert(status))
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    //this.accountAdded.emit({
    //  name: accountName,
    //  status: accountStatus
    //});
    this.data.addAccount(accountName, accountStatus);
    // using loggingSerfvice
    // console.log('A server status changed, new status: ' + accountStatus);
    // moved to data service layer
    // this.log.logStatusChange(accountStatus);


  }
}
