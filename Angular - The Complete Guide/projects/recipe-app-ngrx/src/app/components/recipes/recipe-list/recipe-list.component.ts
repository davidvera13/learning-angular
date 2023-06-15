import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../../../model/recipe.model";
import {RecipeService} from "../../../services/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
    this.recipes = [];
    this.subscription = new Subscription();
  }


  ngOnInit(): void {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    )
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.selectedRecipe = recipe
  // }

  onNewRecipeAdd() {
    this.router.navigate(['create'], { relativeTo: this.route })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
