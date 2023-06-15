import {Component, OnDestroy, OnInit} from '@angular/core';
import {CounterService} from "../../services/counter.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent  implements OnInit, OnDestroy {
  counter = 0;
  counterServiceSub?: Subscription;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterServiceSub = this.counterService.counterChanged.subscribe(
      (newVal) => (this.counter = newVal)
    );
  }

  ngOnDestroy(): void {
    if (this.counterServiceSub) {
      this.counterServiceSub.unsubscribe();
    }
  }
}

