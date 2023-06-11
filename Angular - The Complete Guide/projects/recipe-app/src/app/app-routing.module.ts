import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: "full"},
  {
    path: 'recipes',
    loadChildren: () => import('./components/recipes/recipes.module')
      .then((mod) => mod.RecipesModule) //// lazy loading
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./components/shopping-list/shopping-list.module')
      .then((mod) => mod.ShoppingListModule) //// lazy loading
  },
  {
    path: 'auth',
      loadChildren: () => import('./components/auth/auth.module')
      .then((mod) => mod.AuthModule) //// lazy loading
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
