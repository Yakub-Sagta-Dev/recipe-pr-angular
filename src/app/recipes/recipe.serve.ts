import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shppping-list.service';

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Stovetop Burger',
      'Stovetop Burgers are easier than you think!',
      'https://www.thecookierookie.com/wp-content/uploads/2023/04/stovetop-burgers-recipe-2-768x960.jpg',
      [new Ingredient('buns', 2), new Ingredient('meat', 2)]
    ),
    new Recipe(
      'German Schnitzel',
      'This is the Best German Schnitzel you can find on the internet.',
      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-1-1-728x891.jpg',
      [new Ingredient('meat', 1), new Ingredient('french fries', 20)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
