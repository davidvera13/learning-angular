import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptorService} from "./services/interceptors/auth-interceptor.service";
import {RecipesModule} from "./components/recipes/recipes.module";
import {ShoppingListModule} from "./components/shopping-list/shopping-list.module";
import {CommonsModule} from "./components/commons/commons.module";
import {AuthModule} from "./components/auth/auth.module";

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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
