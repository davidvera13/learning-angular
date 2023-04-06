import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../model/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[];
  ingredientsChanged: EventEmitter<Ingredient[]>
  constructor() {
    this.ingredientsChanged = new EventEmitter<Ingredient[]>();
    this.ingredients = [
      new Ingredient("Apples", 5),
      new Ingredient("Tomatoes", 10)
    ];
  }

  getIngredients(): Ingredient[] {
    // copy of the array
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
