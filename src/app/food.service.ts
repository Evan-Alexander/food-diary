import { Injectable } from '@angular/core';
import { FOODS } from './mock-foods';
import { Food } from './food.model';

@Injectable()

export class FoodService {

  constructor() { }

  getFoods() {
    return FOODS;
  }

}
