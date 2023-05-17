import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { ServersComponent } from './components/servers/servers.component';
import { ServerComponent } from './components/servers/server/server.component';
import { EditServerComponent } from './components/servers/edit-server/edit-server.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from "@angular/forms";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {ServersService} from "./services/servers.service";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import {DeactivateGuard} from "./guards/deactivate.guard";
import { ErrorPageComponent } from './components/error-page/error-page.component';
import {ServerResolverService} from "./services/server-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [ServersService, AuthService, AuthGuard, DeactivateGuard, ServerResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
