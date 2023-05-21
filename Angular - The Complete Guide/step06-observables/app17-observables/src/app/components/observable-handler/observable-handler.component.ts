import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subscription} from "rxjs";

@Component({
  selector: 'app-observable-handler',
  templateUrl: './observable-handler.component.html',
  styleUrls: ['./observable-handler.component.css']
})
export class ObservableHandlerComponent implements OnInit, OnDestroy {
  count: number
  customCount: number;
  errorMessage: string | undefined;
  statusMessage: string | undefined;

  private countSubscription: Subscription;
  private customSubscription: Subscription;

  constructor() {
    this.count = 0
    this.customCount = 0;
    this.countSubscription = new Subscription();
    this.customSubscription = new Subscription();
  }

  ngOnInit() {
    // create a new observable using interval
    // if we leave the page and reopen it, we subscribe to a new observable and we could have multiple instances which
    // would cause a memory leak... we must unsubscribe
    this.countSubscription = interval(1000).subscribe(count => {
      console.log(count);
      this.count = count;
    });

    // this is deprecated in recent angular version
    const customIntervalObservable = new Observable((observer: Observer<number>) => {
      // let's using normal plain js setInterval
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count == 2)
          observer.complete();
        if(count > 3)
          observer.error(new Error("Oops, something went wrong"))
        count++;
      }, 1000)
    });
    this.customSubscription = customIntervalObservable.subscribe(
      (count: number) => {
        console.log(count);
        console.log(count);
        this.customCount = count;
        },
        error => {
        this.errorMessage = error;
        console.log(error);
      },
      () => {
        console.log("Operation complete with : customIntervalObservable");
        this.statusMessage = "Operation complete with : customIntervalObservable";
      })

  }

  ngOnDestroy() {
    this.countSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }

}
