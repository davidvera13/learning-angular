import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit, OnDestroy {
  count: number
  customCount: number;
  customNewCount: number;
  private countSubscription: Subscription;
  private customSubscription: Subscription;
  private customNewSubscription: Subscription;

  constructor() {
    this.count = 0
    this.customCount = 0;
    this.customNewCount = 0;
    this.countSubscription = new Subscription();
    this.customSubscription = new Subscription();
    this.customNewSubscription = new Subscription();
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
    const customIntervalObservable = Observable.create((observer: Observer<number>) => {
      // let's using normal plain js setInterval
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000)
    });
    this.customSubscription = customIntervalObservable.subscribe((count: number) => {
      console.log(count);
      console.log(count);
      this.customCount = count;
    })

    const customIntervalNewObservable = new Observable((observer: Observer<number>) => {
      // let's using normal plain js setInterval
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000)
    });

    this.customNewSubscription = customIntervalNewObservable.subscribe(
      (count: number) => {
        console.log(count);
        console.log(count);
        this.customNewCount = count;
    });
  }

  ngOnDestroy() {
    this.countSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
    this.customNewSubscription.unsubscribe();
  }

}
