import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifngforComponent } from './components/ngifngfor/ngifngfor.component';
import { NgclassngstyleComponent } from './components/ngclassngstyle/ngclassngstyle.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HighlightAlterDirective } from './directives/highlight-alter.directive';
import { HighlightAlterv2Directive } from './directives/highlight-alterv2.directive';
import { HighlightCustomizedDirective } from './directives/highlight-customized.directive';
import { HighlightCustomizedv2Directive } from './directives/highlight-customizedv2.directive';
import { UnlessDirective } from './directives/unless.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifngforComponent,
    NgclassngstyleComponent,
    CustomDirectiveComponent,
    HighlightDirective,
    HighlightAlterDirective,
    HighlightAlterv2Directive,
    HighlightCustomizedDirective,
    HighlightCustomizedv2Directive,
    UnlessDirective,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
