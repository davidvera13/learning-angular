import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Route[] = [
  {
    path: '',
    //component: WelcomeComponent,
    loadComponent: () =>
      import('./components/welcome/welcome.component').then(
        (mod => mod.WelcomeComponent))
  },
  {
    path: 'about',
    // component: AboutComponent,
    loadComponent: () =>
      import('./components/about/about.component').then(
        (mod => mod.AboutComponent))
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/routes').then(
        (mod) => mod.DASHBOARD_ROUTES
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
