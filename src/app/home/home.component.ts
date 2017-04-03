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
  foods: FirebaseListObservable<any[]>;

  constructor(private router: Router, private foodService: FoodService) { }


  ngOnInit() {
    this.foods = this.foodService.getFoods();
  }

  goToEditPage(clickedFood: Food) {
    this.router.navigate(['foods', clickedFood.$key]);
  }

}
