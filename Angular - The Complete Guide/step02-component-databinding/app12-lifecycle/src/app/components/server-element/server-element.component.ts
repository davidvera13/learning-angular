import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  // we can use alias (not mandatory)
  @Input('element') element: { type: string, name: string, content: string } | any;
  @Input() serverName: string;
  @ViewChild('heading', {static: true}) header: any;
  @ContentChild('contentParagraph', {static: true}) paragraph: any // ElementRef;

  constructor() {
    console.log("constructor() called");
    this.serverName = '';
  }

  ngOnInit() {
    // ngOnInt: called once the component is initialized. Constructor is called before ngOnInit
    console.log("ngOnInit() called");
    console.log("text content: ", this.header.nativeElement.textContent);
    console.log("Paragraph content: ", this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    // ngAfterContentChecked: called every time the content has been checked
    console.log("ngOnInit() called");
  }

  ngAfterContentInit(): void {
    // ngAfterContentInit: called after content (ng-content) has been projected into view
    console.log("ngAfterContentInit() called");
  }

  ngAfterViewChecked(): void {
    // ngAfterViewChecked: called everytie the view and child views have been checked
    console.log("ngAfterViewChecked() called");
  }

  ngAfterViewInit(): void {
    // ngAfterViewInit: called after the component's view and child view has been initialized
    console.log("ngAfterViewInit() called");
    console.log("text content: ", this.header.nativeElement.textContent);
    console.log("Paragraph content: ", this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    // ngDoCheck :called during every change detection run
    console.log("ngOnInit() called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    // ngOnChanges: called after a bound input property changed
    console.log("ngOnChanges() called")
  }


  // ngOnDestroy: called once the component is about to be destroyed
  ngOnDestroy(): void {
    console.log("ngOnDestroy() called")
  }
}
