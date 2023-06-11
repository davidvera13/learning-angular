import {Component} from '@angular/core';
import {DataStorageService} from "../../services/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed: boolean;

  constructor(private dataStorageService: DataStorageService) {
    this.collapsed = true;
  }

  onSaveRecipes() {
    this.dataStorageService.saveRecipes();
  }

  onFetchRecipes() {
    this.dataStorageService.fetchRecipes()
      .subscribe(recipes => console.log(recipes));
  }
}
