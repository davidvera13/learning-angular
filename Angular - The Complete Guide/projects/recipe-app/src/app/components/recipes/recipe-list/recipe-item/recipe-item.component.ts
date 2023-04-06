import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../../model/recipe.model";
import {RecipeService} from "../../../../services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe: Recipe | any;
  //@Output() recipeSelected: EventEmitter<Recipe>;
  //@Output() recipeSelected: EventEmitter<void>;

  constructor(private recipeService: RecipeService ) {
    // this.recipeSelected = new EventEmitter<void>();
  }

  ngOnInit(): void {
  }

  onRecipeSelected() {
    //this.recipeSelected.emit(this.recipe);
    // we could pass the selected recipe But we already have the information
    // in the parent component as we are in a loop and we pass information to the child component...
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
