import {createSelector} from "@ngrx/store";
// a selector is a function that can be stored in variable
// it contains a state


// we must use the same name counter as defined in appModule => counter: counterReducer
// this selector takes a state and return the state's value directly without mutating object


export const selectCount = (state: { counter: number}) => state.counter;
// export const selectDouble = (state: { counter: number}) => 2 * state.counter;
export const selectDouble = createSelector(
  selectCount,
  (state: number) => state * 2
);
