import { Component } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent {
  userName: string;

  constructor() {
    this.userName = "My name is James, James Bond";
  }

  onReset() {
    this.userName = "My name is James, James Bond";
  }
}
