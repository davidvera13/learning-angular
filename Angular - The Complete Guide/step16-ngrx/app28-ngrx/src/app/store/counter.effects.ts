import {
  Actions,
  // Effect,
  createEffect,
  ofType} from "@ngrx/effects";
import {decrement, increment, init, set} from "./counter.actions";
import {of, switchMap, tap, withLatestFrom} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectCount} from "./counter.selector";

@Injectable()
export class CounterEffects {
  // old way not supported anymore
  // @Effect({ dispatch: false})
  // saveCount = this.actions$.pipe(
  //   ofType(increment),
  //   tap((action) => {
  //     console.log(action)
  //     localStorage.setItem('count', action.value.toString());
  //   }));


  saveCount =
    createEffect(() =>
      // we can combine several operations base on an observable.
      // in the it yields us a new value which we can handle whenever, anywhere in our application an NgRx action
      // is dispatched. That's what this injected actions gives us.
      // It emits a new value whenever anywhere in the app an action is dispatched.
      // And with this ofType operator, we can now basically filter those dispatched actions
      // and decide for which actions we want to continue in this pipeline.
      // For that, ofType then simply takes these action identifiers as inputs.

      this.actions$.pipe(
        // ofTyoe acts as filter: allow to define for which actions we want to proceed, we can also pass identifier such as
        // [Counter] Increment
        ofType(increment, decrement),
        withLatestFrom(this.store.select('counter')), // this.store.select(selectCount())
        tap(([
          action, counter]) => {
          console.log(action)

          localStorage.setItem('count', counter.toString());
        })
      ),
      {
        dispatch: false
      });

  loadCount = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      switchMap(() => {
        const storedCounter = localStorage.getItem('count');
        if(storedCounter) {
          return of(set({ value: +storedCounter}));
        }
        return of(set({ value: 0}));
      })

    )
  );

  // $ is for observable
  constructor(private actions$: Actions, private store: Store<{counter: number}>) {
  }
}
