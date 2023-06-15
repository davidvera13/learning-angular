import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../model/recipe.model";
import {RecipeService} from "./recipe.service";
import {exhaustMap, map, take, tap} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private baseUrl: string = "https://learning-ng-74dbc-default-rtdb.europe-west1.firebasedatabase.app/"

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  // we could get recipe as a parameter...
  // saveRecipes(Recipes: Recipe[]) {
  // }

  // or retrieve it through recipeService directly
  saveRecipes() {
    const recipes: Recipe[] = this.recipeService.getRecipes();
    // put allow to write a batch of data and override the db content
    this.httpClient.put(this.baseUrl + "recipes.json", recipes)
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.httpClient.get<Recipe[]>(this.baseUrl + "recipes.json").pipe(
        map(recipes =>  recipes.map( recipe => {
          // we copy the recipe object and use ternary operator to define if we have ingredients or not
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []};
        })),
        // tap allow code execution without altering data that will be
        tap(recipes =>
          this.recipeService.setRecipes(recipes)));

    // return this.httpClient.get<Recipe[]>(this.baseUrl + "recipes.json")
    //   // first map is rxjs operator that allow to manipulate data in a pipe
    //   // second map is a vanilla js method used to handle arrays
    //   .pipe(
    //     map(recipes =>  recipes.map( recipe => {
    //       // we copy the recipe object and use ternary operator to define if we have ingredients or not
    //       return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []};
    //     })),
    //     // tap allow code execution without altering data that will be
    //     tap(recipes => this.recipeService.setRecipes(recipes))
    //   );
    //   //
    //   // .subscribe(recipes => {
    //   //   console.log(recipes);
    //   //   this.recipeService.setRecipes(recipes);
    //   // });
  }
}
