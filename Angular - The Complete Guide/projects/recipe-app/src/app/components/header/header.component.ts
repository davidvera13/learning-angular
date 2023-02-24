import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed: boolean;
  @Output() featureSelected: EventEmitter<string>

  constructor() {
    this.collapsed = true;
    this.featureSelected = new EventEmitter<string>();
  }

  onSelect(selected: string) {
    this.featureSelected.emit(selected);
  }
}
