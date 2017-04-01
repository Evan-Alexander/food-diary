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

  ngOnInit(): void{
    this.getFoods();
  }

  addFood(newFood) {
    this.foods.push(newFood);
  }

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }

  deleteFood(food){
    if(confirm("Are you sure you want to delete this food?")){
      this.foodService.deleteFood(food);
    }
  }

  goToDetailPage(clickedFood) {
    this.router.navigate(['food', clickedFood.$key]);
  }


}
