import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FoodService]
})
export class HomeComponent implements OnInit {
  foods: Food[];
  selectedFood = null;


  constructor(
    private router: Router,
    private foodService: FoodService
  ) { }

  getFoods():void {
    this.foodService.getFoods().then(foods => this.foods = foods)
  }

  ngOnInit(){
    this.getFoods();
  }

  // goToDetailPage(clickedFood: Food) {
  //   this.router.navigate(['foods', clickedFood.id]);
  // }

  addFood(newFood: Food) {
    this.foods.push(newFood);
  }


}
