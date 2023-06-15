import { NgModule } from '@angular/core';
import {ShoppingListRoutingModule} from "./shopping-list-routing.module";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {FormsModule } from "@angular/forms";
import {CommonsModule} from "../commons/commons.module";



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    // CommonModule,
    CommonsModule, // it includes CommonModule...
    FormsModule,
    ShoppingListRoutingModule
  ],
  // exports: [
  //   ShoppingListComponent,
  //   ShoppingEditComponent,
  // ]
})
export class ShoppingListModule { }
