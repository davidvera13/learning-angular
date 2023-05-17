import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {ServersComponent} from "./components/servers/servers.component";
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/users/user/user.component";
import {EditServerComponent} from "./components/servers/edit-server/edit-server.component";
import {ServerComponent} from "./components/servers/server/server.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {AuthGuard} from "./guards/auth.guard";
import {DeactivateGuard} from "./guards/deactivate.guard";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {ServerResolverService} from "./services/server-resolver.service";

// const routes: Routes = [
//   { path: "", component: HomeComponent},
//   { path: "users", component: UsersComponent},
//   { path: "users/:id/:name", component: UserComponent},
//   { path: "servers", component: ServersComponent},
//   { path: "servers/:id", component: ServerComponent},
//   { path: "servers/:id/edit", component: EditServerComponent},
// ];

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "users", component: UsersComponent, children: [
      { path: ":id/:name", component: UserComponent},
    ]
  },
  {
    path: "servers",
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ":id", component: ServerComponent, resolve: { server: ServerResolverService }},
      {
        path: ":id/edit",
        canDeactivate: [DeactivateGuard],
        component: EditServerComponent
      },
    ]
  },
  //{ path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: "Page not found"} },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }

];

@NgModule({
  // useHash adds # to URL
  // imports: [RouterModule.forRoot(routes, { useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
