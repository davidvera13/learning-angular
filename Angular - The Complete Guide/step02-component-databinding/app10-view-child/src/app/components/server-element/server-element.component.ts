import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // we can use alias (not mandatory)
  @Input('element') element: { type: string, name: string, content: string } | any;
  constructor() {
    // this.element = { "type": "", "name": "", "content": ""}
  }

  ngOnInit() {

  }
}
