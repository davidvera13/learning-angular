import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../model/ingredient.model";
import {ShoppingListService} from "../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = [];
  }


  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }
  // onIngredientAdded(ingredient: Ingredient) {
  //   if(ingredient != undefined) {
  //     this.ingredients.push(ingredient);
  //   }
  // }
}
