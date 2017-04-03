import { Injectable } from '@angular/core';
import { Food } from './food.model';
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

  addFood(newFood: Food) {
    this.foods.push(newFood);
  }

  getFoodById(foodId: number) {
    return this.angularFire.database.object('foods/' + foodId);
  }

}
