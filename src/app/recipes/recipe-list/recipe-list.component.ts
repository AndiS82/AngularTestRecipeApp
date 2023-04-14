import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is a test description', 'https://unsplash.com/de/fotos/1YhSMc1IywE')
  ];
  constructor() {
    
  }
  ngOnInit() {
    
  }
}