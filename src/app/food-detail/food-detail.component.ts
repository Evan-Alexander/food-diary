import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Food } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css'],
  providers: [FoodService]
})
export class FoodDetailComponent implements OnInit {
  foodId: number = null;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private foodService: FoodService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.foodId = parseInt(urlParameters['id']);
    });
  }

}
