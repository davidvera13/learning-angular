import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AuthComponent} from "./auth.component";
import {CommonsModule} from "../commons/commons.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    //CommonModule,
    // no need to create a auth-routing.module, we pass the route directly
    RouterModule.forChild([
      {
        // path: 'auth',
        path: '',
        component: AuthComponent
      },
    ]),
    CommonsModule,
    FormsModule // no need to export because not used anywhere
  ],
  exports: [RouterModule]
})
export class AuthModule { }
