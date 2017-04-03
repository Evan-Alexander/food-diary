import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { FOODS } from './mock-foods';

@Injectable()

export class FoodService {

  constructor() { }

  getFoods() {
    return FOODS;
  }

  getFoodById(foodId: number) {
    for (var i = 0; i <= FOODS.length - 1; i++) {
      if (FOODS[i].id === foodId) {
        return FOODS[i];
      }
    }
  }

}
