import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../../model/ingredient.model";
import {ShoppingListService} from "../../../services/shopping-list.service";
import {FormGroup, NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // we don't use element ref anymore
  // @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef | undefined
  // @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef | undefined
  // getting a local reference of the form
  @ViewChild("f", {static: false}) shoppingListForm: FormGroup;
  private subscription: Subscription;
  onEditMode: boolean;
  editedIndexItem: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {
    this.subscription = new Subscription();
    this.onEditMode = false;
    this.editedIndexItem = -1; // at start value is negative, if editing, index must be positive
    this.editedItem = new Ingredient("", 0);
    this.shoppingListForm = new FormGroup({})
  }


  ngOnInit(): void {
    // we subscribe to Subject: listener
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.onEditMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.editedIndexItem = index;
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }

  onAddItem(form: NgForm) {
    // const addedIngredient = new Ingredient(
    //   this.nameInputRef?.nativeElement.value,
    //   this.amountInputRef?.nativeElement.value
    // );
    const addedIngredient = new Ingredient(
      form.value.name,
      form.value.amount
    );
    if(this.onEditMode)
      this.shoppingListService.updateIngredient(addedIngredient, this.editedIndexItem);
    else
      this.shoppingListService.addIngredient(addedIngredient);

    this.shoppingListForm.reset();
    this.onEditMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.onEditMode = false;
    this.shoppingListForm.reset();
  }

  onDelete() {
    this.onClear();
    if(this.editedIndexItem >= 0)
      this.shoppingListService.deleteIngredient(this.editedIndexItem);
  }
}
