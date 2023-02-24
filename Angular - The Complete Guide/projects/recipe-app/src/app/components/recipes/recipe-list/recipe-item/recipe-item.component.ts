import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../../../model/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe | any;
  //@Output() recipeSelected: EventEmitter<Recipe>;
  @Output() recipeSelected: EventEmitter<void>;

  constructor() {
    this.recipeSelected = new EventEmitter<void>();
  }

  onRecipeSelected() {
    //this.recipeSelected.emit(this.recipe);
    // we could pass the selected recipe But we already have the information
    // in the parent component as we are in a loop and we pass information to the child component...
    this.recipeSelected.emit();
  }
}
