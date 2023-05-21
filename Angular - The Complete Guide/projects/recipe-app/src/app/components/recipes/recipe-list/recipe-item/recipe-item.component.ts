import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../../../model/recipe.model";
import {RecipeService} from "../../../../services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe: Recipe | any;
  @Input() index: number | any;

  constructor() {
  }

  ngOnInit(): void {
  }
}
