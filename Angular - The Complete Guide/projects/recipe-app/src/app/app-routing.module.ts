import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {RecipesComponent} from "./components/recipes/recipes.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";
import {RecipeStartComponent} from "./components/recipes/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./components/recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./components/recipes/recipe-edit/recipe-edit.component";
import {RecipeResolverService} from "./services/recipe-resolver.service";
import {AuthComponent} from "./components/auth/auth.component";

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: "full"},
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent},
      // create is passed BEFORE url that takes an id, bacause, angular will consider the segment as a segment...
      { path: 'create', component: RecipeEditComponent },
      // resolver will resolve the route before loading it ... it will first load data first
      // this way, by opening directly an url containing id of recipe, we retrieve the data before displaying the page
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService] },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService]
      },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent},
  // handling authentication
  {
    path: 'auth',
    component: AuthComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
