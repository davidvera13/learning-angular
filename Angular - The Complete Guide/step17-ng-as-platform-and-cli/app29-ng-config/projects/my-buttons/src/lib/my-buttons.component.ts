import { Component } from '@angular/core';

@Component({
  selector: 'lib-my-buttons',
  template: `
    <p>It works !
      <button>
        <ng-content>
        </ng-content><
        /button>
    </p>
  `,
  styles: [
  ]
})
export class MyButtonsComponent {

}
