import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptorService} from "./services/interceptors/auth-interceptor.service";
import {CommonsModule} from "./components/commons/commons.module";
import {LoggingService} from "./services/logging.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // AuthComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // remove module because of lazy loading use
    //AuthModule,
    //RecipesModule,
    //ShoppingListModule,
    CommonsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    LoggingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
