import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../model/recipe.model";
import {RecipeService} from "../../../services/recipe.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  @Input() recipe: Recipe | undefined;

  constructor(private recipeService: RecipeService) {
  }
  onAddToShoppingList() {
    if (this.recipe != undefined && this.recipe.ingredients != undefined) {
      this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
    }
  }

  ngOnInit(): void {
  }
}
