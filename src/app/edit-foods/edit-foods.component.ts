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
  foodToDisplay: Food;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private foodService: FoodService,
  ) { }

  ngOnInit() {
    this.route.params.forEach((dataLastEmittedFromObserver) => {
     this.foodToDisplay = new Food(dataLastEmittedFromObserver.name,
                                  dataLastEmittedFromObserver. description,
                                  dataLastEmittedFromObserver.calories);
   });
  }
}
