import { Action, createAction, props } from '@ngrx/store';
// define actions for coutners, here we have increment and decrement


// this action will
export const init = createAction(
  '[Counter] init'
)

export const set = createAction(
  '[Counter] set', props<{ value: number }>()
)

export const increment = createAction(
  // note that we can pass dynamically data to the action by setting a prop
  '[Counter] increment', props<{ value: number }>()
)

export const decrement = createAction(
  '[Counter] decrement' // we can have properties passed to action, it's optional
)


// alternative to createAction is to impement a class
// export const INCREMENT = '[Counter] increment';
// export class IncrementAction implements Action {
//   readonly type: string;
//
//   constructor(public  value:  number) {
//     this.type = INCREMENT;
//   }
// }
//
// export type CounterActions = IncrementAction
