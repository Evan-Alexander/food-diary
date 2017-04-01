import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Food } from '../food.model';
import { FoodService } from '../food.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css'],
  providers: [FoodService]
})

export class FoodDetailComponent implements OnInit {
  foodId: string;
  foodToDisplay;
  editingFood: Food = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private foodService: FoodService
  ) { }

  ngOnInit() {
  this.route.params.forEach((urlParameters) => {
    this.foodId = urlParameters['id'];
  });
  this.foodToDisplay = this.foodService.getFoodById(this.foodId).subscribe(result=>this.foodToDisplay = result);
  }
  
  editFood() {
   this.editingFood = this.foodToDisplay;
   console.log(this.foodToDisplay);
  }

  finishedEditing() {
   this.editingFood = null;
  }

  deleteFood(food){
   if(confirm("Are you sure you want to delete this food?")){
     this.foodService.deleteFood(food);
    }
  }
}
