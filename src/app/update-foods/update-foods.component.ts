import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';
import { Food } from '../food.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-update-foods',
  templateUrl: './update-foods.component.html',
  styleUrls: ['./update-foods.component.css'],
  providers: [FoodService]
})
export class UpdateFoodsComponent implements OnInit {
  @Input() editingFood;
  @Output() doneButtonClickedSender = new EventEmitter();

  foodToDisplay;
  constructor(
    private foodService: FoodService,
    private router: Router) { }

  ngOnInit() {
  }
  updateFood(selectedFood){
      this.foodService.updateFood(selectedFood);
      this.doneButtonClickedSender.emit();
    }


}
