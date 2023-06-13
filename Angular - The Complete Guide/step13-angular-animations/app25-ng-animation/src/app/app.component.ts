import { Component } from '@angular/core';
import {animate, group, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // first square
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      // transition('normal <=> highlighted', animate(300)),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(450))
    ]),
    // second square
    trigger('alternateDivState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
    // first list items
    trigger('listState', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
    // second list items
    trigger('otherListState', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ])
    ]),
  ]
})
export class AppComponent {
  title = 'app25-ng-animation';
  list = ['Milk', 'Sugar', 'Bread'];
  state: string;
  alternateState: string;

  constructor() {
    this.state = "default";
    this.alternateState = "default";
  }

  onAdd(item: string) {
    this.list.push(item);
  }

  onDelete(item: string) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    // let's switch state
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.alternateState == 'normal' ? this.alternateState = 'highlighted' : this.alternateState = 'normal';

  }

  onShrink() {
    this.alternateState = 'shrunken';
  }

  onAnimateStarted(): void {
    // $event:  AnimationEvent): void {
    console.log("onAnimateStarted"); // > ",  $event)

  }


  onAnimateEnded(): void {
    // $event:  AnimationEvent): void {
    console.log("onAnimateStarted"); // > ",  $event)

  }
  protected readonly event = event;

}
