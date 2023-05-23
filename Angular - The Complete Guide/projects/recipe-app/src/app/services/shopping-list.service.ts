import {Injectable} from '@angular/core';
import {Ingredient} from "../model/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[];
  // ingredientsChanged: EventEmitter<Ingredient[]>
  ingredientsChanged: Subject<Ingredient[]>

  constructor() {
    // this.ingredientsChanged = new EventEmitter<Ingredient[]>();
    this.ingredientsChanged = new Subject<Ingredient[]>();
    this.ingredients = [
      new Ingredient("Apples", 5),
      new Ingredient("Tomatoes", 10)
    ];
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    // this.ingredientsChanged.emit(this.ingredients.slice())
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
