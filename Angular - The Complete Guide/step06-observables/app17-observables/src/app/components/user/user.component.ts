import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  id: number;
  isActive: boolean;
  isActiveSubject: boolean;

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
    this.id = 0;
    this.isActive = false
    this.isActiveSubject = false;
  }

  ngOnInit() {
    // this is an observable reacting to URL param and updating id value sent to HTML view
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
    });
  }

  onActivate() {
    this.isActive = !this.isActive
    this.userService.activatedEmitter.emit(this.isActive);
  }

  onActivateSubject() {
    this.isActiveSubject = !this.isActiveSubject
    this.userService.activatedSubject.next(this.isActiveSubject);
  }
}
