import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightAlter]'
})
export class HighlightAlterDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // we need to retrierve the element: angular is not limited to browser
    // we may use workers using elementRef is avoiding rendering errors
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "blue");
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "color",
      "yellow");
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    console.log("eventData", eventData)
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "yellow");
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "color",
      "blue");
  }


  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    console.log("eventData", eventData)
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "red");
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "color",
      "white");
  }
}
