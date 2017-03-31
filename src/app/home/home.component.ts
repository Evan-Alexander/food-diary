import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [
    new Food("Cliff Bar", "Peanut Butter", 250, 1),
    new Food("Tacos", "Burrito Axteca chicken", 300, 2),
    new Food("Tortilla Chips", "With salsa", 350, 3),
  ];
  constructor() { }

  ngOnInit() {
  }

}
