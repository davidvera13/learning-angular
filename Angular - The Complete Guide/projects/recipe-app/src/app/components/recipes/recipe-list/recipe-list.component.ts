import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../../../model/recipe.model";
import {createObject} from "rxjs/internal/util/createObject";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[];
  selectedRecipe: Recipe | any;
  @Output() emittedRecipe: EventEmitter<Recipe>;

  constructor() {
    this.emittedRecipe = new EventEmitter<Recipe>();
    this.recipes = [
      new Recipe(
        "A test recipe",
        "Simply a test ...",
        "assets/img/recipe01.jpg"),
      new Recipe(
        "A test recipe 2",
        "Simply a test ...",
        "assets/img/recipe01.jpg")
    ];
  }

  onRecipeSelected(recipe: Recipe) {
    // selectedRecipe is not useful unless we print something on the HTML ...
    // we can pass directly the recipe value
    // console.log(recipe)
    this.selectedRecipe = recipe
    this.emittedRecipe.emit(this.selectedRecipe);

  }
}
