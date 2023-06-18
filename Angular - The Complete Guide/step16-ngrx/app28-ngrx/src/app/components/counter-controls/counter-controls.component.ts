import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import {CounterService} from "../../services/counter.service";
// import {decrement, increment, IncrementAction} from "../../store/counter.actions";
import {decrement, increment } from "../../store/counter.actions";
import { Observable} from "rxjs";
import {selectCount} from "../../store/counter.selector";

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css']
})
export class CounterControlsComponent {
  count$: Observable<number>;
  // constructor(private counterService: CounterService) {
  constructor(private store: Store<{counter: number}>) {
    this.count$ = this.store.select(selectCount);
    console.log(this.count$);
    this.count$.subscribe({
      next: (output: number) => console.log(output)
    });
  }

  increment() {
    // we can pass data... the format is defined in reducer
    this.store.dispatch(increment({value: 2}));

    // we can also use a class for dipatch data
    // this.store.dispatch(new IncrementAction(5));
  }

  decrement() {
    this.store.dispatch(decrement());
    // this.counterService.decrement();
  }
}
