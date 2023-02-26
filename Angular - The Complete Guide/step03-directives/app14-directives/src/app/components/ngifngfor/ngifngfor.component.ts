import { Component } from '@angular/core';

@Component({
  selector: 'app-ngifngfor',
  templateUrl: './ngifngfor.component.html',
  styleUrls: ['./ngifngfor.component.css']
})
export class NgifngforComponent {
  // numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4, 6];
  onlyOdd = false;
}
