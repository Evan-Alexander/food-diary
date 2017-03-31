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
export class HomeComponent {
  foods: Food[];

  goToDetailPage(clickedFood: Food) {
    this.router.navigate(['foods', clickedFood.id]);
  }
  constructor(
    private router: Router,
    private foodService: FoodService
  ) { }

}
