import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServerComponent} from "./components/server/server.component";
import { ServersComponent } from './components/servers/servers.component';
import { HeaderComponent } from './components/header/header.component';
import { SubHeaderComponent } from './components/header/sub-header/sub-header.component';
import {WarningAlertComponent} from "./components/warning-alert/warning-alert.component";
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';

@NgModule({
  // we declare components here
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    SubHeaderComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
  ],
  // we declare modules
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
