import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../../model/ingredient.model";
import {ShoppingListService} from "../../services/shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = [];
    this.ingredientsSubscription = new Subscription();
  }


  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsSubscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy(): void {
    this.ingredientsSubscription.unsubscribe();
  }
  // onIngredientAdded(ingredient: Ingredient) {
  //   if(ingredient != undefined) {
  //     this.ingredients.push(ingredient);
  //   }
  // }
}
