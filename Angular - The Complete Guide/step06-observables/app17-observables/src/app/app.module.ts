import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { ObservableHandlerComponent } from './components/observable-handler/observable-handler.component';
import { ObservableOperatorsComponent } from './components/observable-operators/observable-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    ObservableHandlerComponent,
    ObservableOperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
