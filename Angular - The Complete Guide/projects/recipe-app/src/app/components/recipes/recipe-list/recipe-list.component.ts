import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../../../model/recipe.model";
import {createObject} from "rxjs/internal/util/createObject";
import {RecipeService} from "../../../services/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // recipes: Recipe[];
  selectedRecipe: Recipe | any;
  // @Output() emittedRecipe: EventEmitter<Recipe>;
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
    // this.emittedRecipe = new EventEmitter<Recipe>();
    this.recipes = [];
  //   this.recipes = [
  //     new Recipe(
  //       "A test recipe",
  //       "Simply a test ...",
  //       "assets/img/recipe01.jpg"),
  //     new Recipe(
  //       "A test recipe 2",
  //       "Simply a test ...",
  //       "assets/img/recipe01.jpg")
  //   ];
  }


  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    // selectedRecipe is not useful unless we print something on the HTML ...
    // we can pass directly the recipe value
    // console.log(recipe)
    this.selectedRecipe = recipe
    // this.emittedRecipe.emit(this.selectedRecipe);

  }

  onNewRecipeAdd() {
    this.router.navigate(['create'], { relativeTo: this.route })
  }
}
