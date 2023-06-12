import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DetailsComponent } from './components/welcome/details/details.component';
//import {SharedModule} from "./shared/shared/shared.module";

@NgModule({
  declarations: [
    // AppComponent,
    // WelcomeComponent,
    // DetailsComponent
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    // SharedModule,
    // DetailsComponent,
    // WelcomeComponent
  ],
  providers: [],
  // bootstrap: [
  //   AppComponent
  // ]
})
export class AppModule { }
