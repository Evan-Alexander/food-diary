import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { FOODS } from './mock-foods';

@Injectable()
export class FoodService {

  constructor() { }
  getFoods() {
    return FOODS;
  }
}
