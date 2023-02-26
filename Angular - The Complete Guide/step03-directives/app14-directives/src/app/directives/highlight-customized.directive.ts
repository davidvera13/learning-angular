import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlightCustomized]'
})
export class HighlightCustomizedDirective implements OnInit{
  @Input() eltTextColor;
  @Input() eltBackgroundColor;

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


    // [eltHighlightedBackgroundColor] = "'red'"
    //   [eltHighlightedTextColor]="'black'"
    //   [eltBackgroundColor] = "'black'"
    //   [eltTextColor] = "'red'" >
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
