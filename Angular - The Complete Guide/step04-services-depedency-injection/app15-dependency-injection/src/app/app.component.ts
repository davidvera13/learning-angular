import { Component } from '@angular/core';
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: { name: string, status: string } [];

  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  constructor(private data: DataService) {
    this.accounts = this.data.accounts;
  }

  onAccountAdded(newAccount: { name: string, status: string }) {
    // this.accounts.push(newAccount);
    this.data.addAccount(newAccount.name, newAccount.status);
  }

  onStatusChanged(updateInfo: { id: number, newStatus: string }) {
    // this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.data.updateAccount(updateInfo.id, updateInfo.newStatus);
  }

//   onSetToInactive(id: number) {
//     this.inactiveUsers.push(this.activeUsers[id]);
//     this.activeUsers.splice(id, 1);
//   }
//
//   onSetToActive(id: number) {
//     this.activeUsers.push(this.inactiveUsers[id]);
//     this.inactiveUsers.splice(id, 1);
//   }
// }
}
