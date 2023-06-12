import {Component, computed, effect, Signal, signal, WritableSignal} from '@angular/core';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css'],
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  actions: WritableSignal<string[]> = signal<string[]>([]); // array is mutable object
  counter: WritableSignal<number> = signal(0);
  // computed value depend on WritableSignal
  doubleCounter: Signal<any> = computed(() => this.counter() * 2);

  constructor() {
    effect(() => {
      // we execute a signal and this method is called each time counter() is updated / set / mutated
      console.log(this.counter())
    })
  }
  increment() {
    // set      => we pass a new value without taking care of previous one
    // update   => we use old value and set a new one based on it
    // mutate   => we also use old value and we mutate it. it could apply to object that are modified not to numbers
    this.counter.update((currentValue: number) => currentValue+1);
    this.actions.mutate((previousActionsList: string[]) => previousActionsList.push("INCREMENT"));
  }

  decrement() {
    this.counter.update((currentValue: number) => currentValue-1);
    this.actions.mutate((previousActionsList: string[]) => previousActionsList.push("DECREMENT"));
  }
}
