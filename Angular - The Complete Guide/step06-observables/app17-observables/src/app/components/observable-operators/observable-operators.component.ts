import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Observer, Subscription} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-observable-operators',
  templateUrl: './observable-operators.component.html',
  styleUrls: ['./observable-operators.component.css']
})
export class ObservableOperatorsComponent implements OnInit, OnDestroy {
  count: string
  customCount: string;
  errorMessage: string | undefined;
  statusMessage: string | undefined;

  private countSubscription: Subscription;
  private customSubscription: Subscription;

  constructor() {
    this.count = "";
    this.customCount = "";
    this.countSubscription = new Subscription();
    this.customSubscription = new Subscription();
  }

  ngOnInit() {
    // create a new observable using interval
    // if we leave the page and reopen it, we subscribe to a new observable and we could have multiple instances which
    // would cause a memory leak... we must unsubscribe
    this.countSubscription = interval(1000).subscribe(count => {
      console.log(count);
      this.count = "Round " + count;
    });

    // this is deprecated in recent angular version
    const customIntervalObservable = new Observable((observer: Observer<number>) => {
      // let's using normal plain js setInterval
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000)
    });

    // using rxjs

    this.customSubscription = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data % 2 == 0;
        }),
        map((data: number) => {
          return  "Transform > Round " + (data);
        }))
      .subscribe(
        (transformedData: string) => {
        console.log(transformedData);
        this.customCount = transformedData;
      })

  }

  ngOnDestroy() {
    this.countSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }

}
