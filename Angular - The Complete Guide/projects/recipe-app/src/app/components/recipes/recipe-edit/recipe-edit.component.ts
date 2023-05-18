import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  id: number | undefined;
  isEditingMode: boolean;

  constructor(private route: ActivatedRoute) {
    this.isEditingMode = false;
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.isEditingMode = param['id'] != null;
      console.log(this.isEditingMode);
    });
  }




}
