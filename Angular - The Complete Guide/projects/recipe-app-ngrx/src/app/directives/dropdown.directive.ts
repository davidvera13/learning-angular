import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // bind to the open class
  @HostBinding('class.open') isOpen: boolean;
  // should add style to element -> listening to a click event
  @HostListener('click') toggleOnClick() {
    this.isOpen = !this.isOpen
  }

  constructor() {
    this.isOpen = false;
  }

}
