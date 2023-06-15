import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownDirective} from "../../directives/dropdown.directive";
import {PlaceHolderDirective} from "../../directives/place-holder.directive";
import {AlertComponent} from "./alert/alert.component";
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {LoggingService} from "../../services/logging.service";



@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    DropdownDirective,
    PlaceHolderDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    AlertComponent,
    LoadingSpinnerComponent,
    DropdownDirective,
    PlaceHolderDirective
  ],
  providers: [
    // 2 instance are used ... 
    LoggingService
  ]
})
export class CommonsModule { }
