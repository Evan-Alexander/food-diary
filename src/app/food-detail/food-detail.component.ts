import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Food } from '../food.model';
import { FoodService } from '../food.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css'],
  providers: [FoodService]
})

export class FoodDetailComponent implements OnInit {
  foodId: string = null;
  foodToDisplay;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private foodService: FoodService
  ) { }

  ngOnInit() {
   this.route.params.forEach((urlParameters) => {
     this.foodId = urlParameters['id'];
   });
   this.foodToDisplay = this.foodService.getFoodById(this.foodId);
  }

}
