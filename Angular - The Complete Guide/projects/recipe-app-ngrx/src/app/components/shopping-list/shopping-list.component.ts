import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../../model/ingredient.model";
import {ShoppingListService} from "../../services/shopping-list.service";
import {Subject, Subscription} from "rxjs";
import {LoggingService} from "../../services/logging.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService,
              private loggingService: LoggingService) {
    this.ingredients = [];
    this.ingredientsSubscription = new Subscription();
  }


  ngOnInit(): void {
    // we use a singleton if injectable in root
    this.loggingService.printLog("# from ShoppingListComponent > ngOnInit");

    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsSubscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

  onEditItem(id: number) {
    console.log("Editing ... " + id);
    // emitting value
    this.shoppingListService.startedEditing.next(id);
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
