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
  startedEditing: Subject<number>;


  constructor() {
    // this.ingredientsChanged = new EventEmitter<Ingredient[]>();
    this.ingredientsChanged = new Subject<Ingredient[]>();
    this.startedEditing = new Subject();
    this.ingredients = [
      new Ingredient("Apples", 5),
      new Ingredient("Tomatoes", 10)
    ];
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }
  getIngredient(id: number): Ingredient {
    return this.ingredients[id];
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

  updateIngredient(ingredient: Ingredient, id: number): void {
    this.ingredients[id] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  deleteIngredient(editedIndexItem: number) {
    // remove on element
    this.ingredients.splice(editedIndexItem, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
