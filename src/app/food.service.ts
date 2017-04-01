import { Injectable } from '@angular/core';
import { Food } from './food.model';
import { FOODS } from './mock-foods';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class FoodService {
  foods: FirebaseListObservable <any[]>;


  getFoods(){
    return this.foods;
  }
  constructor(private angularFire: AngularFire) {
    this.foods = angularFire.database.list('foods');
  }
}
