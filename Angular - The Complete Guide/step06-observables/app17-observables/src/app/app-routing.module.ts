import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/user/user.component";
import {ObservableHandlerComponent} from "./components/observable-handler/observable-handler.component";
import {ObservableOperatorsComponent} from "./components/observable-operators/observable-operators.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'handling', component: ObservableHandlerComponent },
  {path: 'operators', component: ObservableOperatorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
