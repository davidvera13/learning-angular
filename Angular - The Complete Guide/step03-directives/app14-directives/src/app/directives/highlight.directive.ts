import {Directive, ElementRef, OnInit} from '@angular/core';


// note: [] is the selector for an attribute directive
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  // we need some params injected in the constructor
  // we first need elementRef: what element will be using the directive
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'pink';

        // throw new Error('Method not implemented.');
  }

}
