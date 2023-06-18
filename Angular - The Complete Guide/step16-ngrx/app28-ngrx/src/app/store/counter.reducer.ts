import { Action, createReducer, on } from '@ngrx/store';
// import {CounterActions, INCREMENT, decrement, increment, IncrementAction} from "./counter.actions";
import {decrement, increment, set} from "./counter.actions";

const initialState = 0; // initial state for counter is a number
export const counterReducer = createReducer(
  initialState,
  // action to listen : increment
  // function to be executed if action occured
  // update state, we do not mutate, we copy value generaly
  on(increment, (state: number, action: { value: number}) => state + action.value ),
  on(decrement, (state: number) => state - 1),
  on(set, (state: number, action: { value: number}) => action.value)
);


// export function counterReducer(state = initialState, action: CounterActions | Action) {
//   if(action.type === INCREMENT && action instanceof IncrementAction) {
//     return state + (action as IncrementAction).value
//   }
//   return state;
// }
