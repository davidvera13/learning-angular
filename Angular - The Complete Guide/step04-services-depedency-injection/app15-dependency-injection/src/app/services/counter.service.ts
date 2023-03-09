import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactive: number;
  inactiveToActive: number;
  constructor() {
    this.activeToInactive = 0;
    this.inactiveToActive = 0;
  }

  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log("> incrementActiveToInactive! " + this.activeToInactive);
  }

  incrementInactiveToActive() {
    this.inactiveToActive++;
    console.log("> incrementInactiveToActive: " + this.inactiveToActive);
  }
}
