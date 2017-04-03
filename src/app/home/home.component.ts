import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  foods: Food[] = [
    new Food("Cliff Bar", "Peanut Butter", 250, 1),
    new Food("Coffee", "with a touch of cream and sugar", 150, 1),
    new Food("Tacos", "Burrito Axteca chicken", 300, 2),
    new Food("Tortilla Chips", "With salsa", 350, 3),
  ];

  ngOnInit() {
  }

  goToEditPage(clickedFood: Food) {
    this.router.navigate(['foods', clickedFood.id]);
  }

}
