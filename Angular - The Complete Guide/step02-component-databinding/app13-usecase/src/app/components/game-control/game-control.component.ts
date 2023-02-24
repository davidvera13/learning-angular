import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  emittedNumber: number = 0;
  @Output() intervalFired = new EventEmitter<any>();
  interval: any;

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.emittedNumber+ 1);
      this.emittedNumber++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
