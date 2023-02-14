import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServerComponent} from "./components/server/server.component";
import {ServersComponent} from "./components/servers/servers.component";
import {HeaderComponent} from "./components/header/header.component";
import {FormsModule} from "@angular/forms";
import { InputBindingComponent } from './components/input-binding/input-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    InputBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
