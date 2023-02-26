import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightAlterv2]'
})
export class HighlightAlterv2Directive implements OnInit {
  // we bind to a property
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') textColor: string;

  constructor() {
    this.backgroundColor = 'transparent';
    this.textColor = 'black';
  }

  ngOnInit(): void {
    // we need to retrieve the element: angular is not limited to browser
    // we may use workers using elementRef is avoiding rendering errors
    this.backgroundColor = "blue";
    this.textColor = "yellow";
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    console.log("eventData", eventData);
    this.backgroundColor = 'yellow';
    this.textColor = "blue";
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    console.log("eventData", eventData);
    this.backgroundColor = 'red';
    this.textColor = "white";
  }
}
