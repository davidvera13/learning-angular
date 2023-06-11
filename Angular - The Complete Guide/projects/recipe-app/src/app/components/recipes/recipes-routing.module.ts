import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {AuthGuard} from "../../guards/auth.guard";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeResolverService} from "../../services/recipe-resolver.service";


const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: RecipeStartComponent
      },
      // create is passed BEFORE url that takes an id, bacause, angular will consider the segment as a segment...
      {
        path: 'create',
        component: RecipeEditComponent
      },
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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
