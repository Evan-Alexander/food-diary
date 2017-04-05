import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { FoodService } from '../food.service'
import { Food } from '../food.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css'],
  providers: [FoodService]
})
export class NewFoodComponent implements OnInit {
  foods: FirebaseObjectObservable<any[]>;

  constructor(
    private foodService: FoodService,
    private router: Router,
    private angularFire: AngularFire
    ) { }

  ngOnInit() {
  }

  submitForm(name: string, description: string, calories: string) {
    if (!name || !description || !calories) {
      alert("Please fill in all fields and resubmit.");
    } else {
      var newFood: Food = new Food(name, description, calories);
      this.foodService.addFood(newFood);
      alert("Entry Submitted!");
    }
  }

  redirect() {
    this.router.navigate(['/']);
  }

}
