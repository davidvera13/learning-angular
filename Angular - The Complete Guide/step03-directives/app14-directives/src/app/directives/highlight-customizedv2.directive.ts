import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightCustomizedv2]'
})
export class HighlightCustomizedv2Directive {
  @Input() eltTextColor;
  @Input('appHighlightCustomizedv2') eltBackgroundColor;

  @Input() eltHighlightedTextColor;
  @Input() eltHighlightedBackgroundColor;



  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') textColor: string;

  constructor() {
    this.eltBackgroundColor = 'black';
    this.eltTextColor = 'red'

    this.eltHighlightedBackgroundColor = 'red'
    this.eltHighlightedTextColor = 'black';

    this.backgroundColor = this.eltBackgroundColor;
    this.textColor = this.eltTextColor;
  }

  ngOnInit(): void {
    this.backgroundColor = this.eltBackgroundColor;
    this.textColor = this.eltTextColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    console.log("eventData", eventData);
    this.backgroundColor = this.eltHighlightedBackgroundColor;
    this.textColor = this.eltHighlightedTextColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    console.log("eventData", eventData);
    this.backgroundColor = this.eltBackgroundColor;
    this.textColor = this.eltTextColor;
  }
}
