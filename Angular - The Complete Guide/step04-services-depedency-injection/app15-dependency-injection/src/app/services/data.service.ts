import {EventEmitter, Injectable} from '@angular/core';
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  // create an event emitter
  statusUpdated: EventEmitter<string>

  constructor(private log: LoggingService) {
    this.statusUpdated = new EventEmitter();
  }

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status});
    this.log.logStatusChange(status);
  }

  updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.log.logStatusChange(status);
  }
}
