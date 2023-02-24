import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  triggeredNumber: number;
  oddNumbers: number[];
  evenNumbers: number[];

  constructor() {
    this.triggeredNumber = 0;
    this.oddNumbers = [];
    this.evenNumbers = [];
  }

  onIntervalFired($event: any) {
    console.log($event)
    this.triggeredNumber = $event;
    if(this.triggeredNumber % 2 == 0) {
      this.evenNumbers.push(this.triggeredNumber);
    } else {
      this.oddNumbers.push(this.triggeredNumber);
    }
  }
}
