import {Component, OnDestroy} from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'app17-observables';
  userActivated: boolean;
  userActivatedSubject: boolean;
  constructor(private userService: UserService) {
    this.userActivated = false;
    this.userActivatedSubject = false;
    this.userService.activatedEmitter.subscribe((didActivate) => {
      this.userActivated = didActivate;
    })

    this.userService.activatedSubject.subscribe((didActivate) => {
      this.userActivatedSubject = didActivate;
    })
  }

  ngOnDestroy() {
    this.userService.activatedSubject.unsubscribe();
    this.userService.activatedEmitter.unsubscribe();
  }
}
