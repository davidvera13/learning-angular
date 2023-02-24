import { Component } from '@angular/core';
import {Ingredient} from "../../model/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[];

  constructor() {
    this.ingredients = [
      new Ingredient("Apples", 5),
      new Ingredient("Tomatoes", 10)
    ];
  }

  onIngredientAdded(ingredient: Ingredient) {
    if(ingredient != undefined) {
      this.ingredients.push(ingredient);
    }
  }
}
