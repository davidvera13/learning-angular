import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterControlsComponent } from './components/counter-controls/counter-controls.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import {counterReducer} from "./store/counter.reducer";
import { EffectsModule } from '@ngrx/effects';
import {CounterEffects} from "./store/counter.effects";

@NgModule({
  declarations: [
    AppComponent,
    CounterControlsComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // adding store module
    StoreModule.forRoot({
      counter: counterReducer
    }, {}),
    // adding effects module
    EffectsModule.forRoot([
      CounterEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
