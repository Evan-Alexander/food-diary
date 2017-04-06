import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food.model';

@Component({
  selector: 'app-update-foods',
  templateUrl: './update-foods.component.html',
  styleUrls: ['./update-foods.component.css'],
  providers: [FoodService]
})
export class UpdateFoodsComponent implements OnInit {
  @Input() selectedFood;

  constructor(
    private foodService: FoodService) { }

  ngOnInit() {
  }

  beginUpdatingFood(foodToUpdate) {
    this.foodService.updateFood(foodToUpdate);
  }
}
