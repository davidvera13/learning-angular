import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {DataService} from "./data.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService, DataService]
})
export class UsersComponent implements OnInit{
  user: {name: string};
  isLoggedIn: boolean;
  data: string;


  constructor(private userService: UserService,
              private dataService: DataService) {
    this.user = { name: 'holmes'};
    this.isLoggedIn = false;
    this.data = '';
  }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data: string) => this.data = data);
  }
}
