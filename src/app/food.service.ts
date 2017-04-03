import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { FOODS } from './mock-foods';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()

export class FoodService {
  foods: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.foods = angularFire.database.list('foods');
  }

  getFoods() {
    return this.foods;
  }

  getFoodById(foodId: number) {
    for (var i = 0; i <= FOODS.length - 1; i++) {
      if (FOODS[i].id === foodId) {
        return FOODS[i];
      }
    }
  }

}
