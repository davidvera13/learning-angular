import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../../model/ingredient.model";
import {ShoppingListService} from "../../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef | undefined
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef | undefined

  constructor(private shoppingListService: ShoppingListService ) {
  }


  ngOnInit(): void {
  }

  onAddItem() {
    const addedIngredient = new Ingredient(
      this.nameInputRef?.nativeElement.value,
      this.amountInputRef?.nativeElement.value
    );
    this.shoppingListService.addIngredient(addedIngredient);
  }

}
