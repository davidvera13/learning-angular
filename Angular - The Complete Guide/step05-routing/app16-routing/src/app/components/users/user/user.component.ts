import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string} | null;
  paramsSubscription: Subscription | null;

  constructor(private route: ActivatedRoute) {
    this.user = null;
    this.paramsSubscription = null;
  }

  ngOnInit() {
    // we could load user using route ... we can also use user passed ..
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // this.route.params is an observable
    this.paramsSubscription = this.route.params
      .subscribe((params: Params) => {
        // we can update from here ...
        if(this.user != null) {
          this.user.id = params["id"];
          this.user.name = params["name"];
        }
      })
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }


}
