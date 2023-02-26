import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclassngstyle',
  templateUrl: './ngclassngstyle.component.html',
  styleUrls: ['./ngclassngstyle.component.css']
})
export class NgclassngstyleComponent {
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4, 6];
  onlyOdd = false;
}
