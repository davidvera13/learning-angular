import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];
  // @Input() users: string[] = [];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.usersService.setToActive(id);

  }


}
