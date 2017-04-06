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
  foods;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private foodService: FoodService) { }


  ngOnInit() {
   this.foodService.getFoods().subscribe(dataLastEmittedFromObserver => {
     this.foods = dataLastEmittedFromObserver;
     console.log(this.foods);
   })
 }

  goToEditPage(clickedFood) {
    this.router.navigate(['foods', clickedFood.$key]);
  }

  redirect() {
    this.router.navigate(['/new-food']);
  }

}
