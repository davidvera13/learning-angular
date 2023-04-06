import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../model/ingredient.model";
import {ShoppingListService} from "../../../services/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // note: adding undefined as type avoid to initialize value
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef | undefined
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef | undefined
  // @Output() ingredient: EventEmitter<Ingredient>;

  constructor(private shoppingListService: ShoppingListService ) {
    // this.ingredient = new EventEmitter<Ingredient>()

  }


  ngOnInit(): void {
  }

  onAddItem() {
    const addedIngredient = new Ingredient(
      this.nameInputRef?.nativeElement.value,
      this.amountInputRef?.nativeElement.value
    );
    this.shoppingListService.addIngredient(addedIngredient);
    // if(this.ingredient != undefined) {
    //   this.ingredient.emit(addedIngredient);
    // }
  }

}
