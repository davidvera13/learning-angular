import {Component, OnDestroy, OnInit} from '@angular/core';
// import {CounterService} from "../../services/counter.service";
import {Observable, Subscription} from "rxjs";
import { Store } from '@ngrx/store';
import {selectCount, selectDouble} from "../../store/counter.selector";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent { // implements OnInit, OnDestroy {
  count$: Observable<number>; // note:  we add $ in the end if we store an observable
  countDouble$: Observable<number>;

  // counter = 0;
  // counterServiceSub?: Subscription;

  constructor(private store: Store<{counter: number}>) {
    // we select the store used by key name
    // this.count$ = store.select('counter');
    // we can use the selector
    this.count$ = store.select(selectCount)
    this.countDouble$ = store.select(selectDouble)
    // this.count$.subscribe()
  }

  // ngOnInit(): void {
  //   this.counterServiceSub = this.counterService.counterChanged.subscribe(
  //     (newVal) => (this.counter = newVal)
  //   );
  // }

  // ngOnDestroy(): void {
  //   if (this.counterServiceSub) {
  //     this.counterServiceSub.unsubscribe();
  //   }
  // }
}

