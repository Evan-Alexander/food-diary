import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Food } from '../food.model';
import { FoodService } from '../food.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-foods',
  templateUrl: './edit-foods.component.html',
  styleUrls: ['./edit-foods.component.css'],
  providers: [FoodService]
})
export class EditFoodsComponent implements OnInit{
  foodId: string;
  foodToDisplay;
  editingFood: Food = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private foodService: FoodService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.foodId = urlParameters['id'];
   });
   this.foodToDisplay = this.foodService.getFoodById(this.foodId);
  }
  editFood() {
   this.editingFood = this.foodToDisplay;
   console.log(this.foodToDisplay);
  }

   finishedEditing() {
     this.editingFood = null;
   }

}
