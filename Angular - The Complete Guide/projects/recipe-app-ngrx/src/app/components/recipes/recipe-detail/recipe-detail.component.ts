import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../../model/recipe.model";
import {RecipeService} from "../../../services/recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipe: Recipe | undefined;
  id: number;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
    this.id = 0;
  }
  onAddToShoppingList() {
    if (this.recipe != undefined && this.recipe.ingredients != undefined) {
      this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onEditRecipe() {
    // good way to handle the routing
    this.router.navigate(['edit'], { relativeTo: this.route }).then();
    // we can build more complex routing path if required.
    //this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route }).then();
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
