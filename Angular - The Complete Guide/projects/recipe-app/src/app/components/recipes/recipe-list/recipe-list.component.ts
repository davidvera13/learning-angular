import { Component } from '@angular/core';
import {Recipe} from "../../../model/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe(
        "A test recipe",
        "Simply a test ...",
        "assets/img/recipe01.jpg"),
      new Recipe(
        "A test recipe",
        "Simply a test ...",
        "assets/img/recipe01.jpg")
    ];
  }
}
