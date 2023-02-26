import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // bind to the open class
  @HostBinding('class.open') isOpen: boolean;
  // should add style to element
  // listening to a click event
  @HostListener('click') toggleOnClick() {
    this.isOpen = !this.isOpen
  }

  // allow to close the menu by clicking anywhere
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }


  constructor(private elementRef: ElementRef) {
    // at startup, menu is closed
    this.isOpen = false;
  }

}
