import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FoodService]
})
export class HomeComponent implements OnInit {
  foods: FirebaseListObservable <any[]>;
  selectedFood = null;


  constructor(
    private router: Router,
    private foodService: FoodService
  ) { }

  getFoods(): void {
       this.foods = this.foodService.getFoods();
     }

  ngOnInit(){
    this.getFoods();
  }

  addFood(newFood: Food) {
    this.foods.push(newFood);
  }

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
    //save edits to firebase
  }

  goToDetailPage(clickedFood: Food) {
    this.router.navigate(['food', clickedFood.id]);
  }


}
