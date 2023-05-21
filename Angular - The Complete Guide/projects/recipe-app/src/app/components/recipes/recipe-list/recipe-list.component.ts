import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../../model/recipe.model";
import {RecipeService} from "../../../services/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  selectedRecipe: Recipe | any;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
    this.recipes = [];
  }


  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.selectedRecipe = recipe
  // }

  onNewRecipeAdd() {
    this.router.navigate(['create'], { relativeTo: this.route })
  }
}
