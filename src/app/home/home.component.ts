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

  foods: Food[];

  ngOnInit() {
  }

  goToEditPage(clickedFood: Food) {
    this.router.navigate(['foods', clickedFood.id]);
  }

}
