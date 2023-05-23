import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../model/recipe.model";
import {Ingredient} from "../model/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private readonly recipes: Recipe[];

  constructor(private shoppingListService: ShoppingListService) {
    this.recipes = [
      new Recipe(
        "Schnitzel",
        "Nice speciality from Austria",
        "assets/img/recipe01.jpg",
        [
          new Ingredient("Meat", 1),
          new Ingredient("French fries", 120)
        ]),
      new Recipe(
        "Cheese burger",
        "Simply a cheese burger ...",
        "assets/img/recipe02.jpg",
        [
          new Ingredient("Buns", 1),
          new Ingredient("Meat", 1),
          new Ingredient("Cheese", 1),
          new Ingredient("Salad", 2),
          new Ingredient("Ketchup", 1)
        ]),
    ];
  }

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }
}
