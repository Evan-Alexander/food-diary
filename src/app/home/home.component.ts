import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FoodService]
})
export class HomeComponent implements OnInit {
  foods;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private foodService: FoodService) { }


  ngOnInit() {
   this.foodService.getFoods().subscribe(dataLastEmittedFromObserver => {
     this.foods = dataLastEmittedFromObserver;
   })
 }

  goToEditPage(clickedFood) {
    this.router.navigate(['foods', clickedFood.$key]);
  }

  calorieFilter: string = "allFoods";

  onChange(optionFromMenu) {
    this.calorieFilter = optionFromMenu;
  }
}
