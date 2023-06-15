import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterControlsComponent } from './components/counter-controls/counter-controls.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterControlsComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
