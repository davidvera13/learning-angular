import {Component} from "@angular/core";

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>This is a warning </p>
  `,
  styles: [
    `p {
      padding: 5px;
      background-color: lightcoral;
      border: 1px solid red;
    }`
  ]
})
export class WarningAlertComponent {}
