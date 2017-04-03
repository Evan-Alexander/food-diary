import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { FoodService } from '../food.service'
import { Food } from '../food.model';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css'],
  providers: [FoodService]
})
export class NewFoodComponent implements OnInit {
  foods: FirebaseObjectObservable<any[]>;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
  }

  submitForm(name: string, description: string, calories: string) {
    var newFood: Food = new Food(name, description, calories);
    this.foodService.addFood(newFood);
  }

}
