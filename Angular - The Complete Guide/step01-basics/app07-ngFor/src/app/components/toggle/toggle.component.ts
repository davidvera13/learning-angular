import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  showPassword = false;
  logs: any = []

  onToggle() {
    this.showPassword = !this.showPassword;
    this.logs.push(new Date());
  }
}
