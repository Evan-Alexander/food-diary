import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from '../food.model';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent implements OnInit {
  @Output() newFoodSender = new EventEmitter();
    constructor() { }

  ngOnInit() {
  }
  addFood(name:string, description:string, calories:number) {
    var newFood: Food = {name: name, description:description, calories:calories, id: null, $key: null};
    this.newFoodSender.emit(newFood);
  }
}
