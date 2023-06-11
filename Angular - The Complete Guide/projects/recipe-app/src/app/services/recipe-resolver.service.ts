import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Recipe} from "../model/recipe.model";
import {DataStorageService} from "./data-storage.service";
import {Observable} from "rxjs";
import {RecipeService} from "./recipe.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]>{

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService) {

  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    // if we update a recipe and fetch data, updated data are not kept.
    // we must check if updates were provided and fetch new ones only
    const recipes = this.recipeService.getRecipes();
    if(recipes.length === 0)
      return  this.dataStorageService.fetchRecipes();
    else
      return recipes;
  }
}
