import { Component } from '@angular/core';
import { Food } from '../food.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  goToDetailPage(clickedFood: Food) {
    this.router.navigate(['foods', clickedFood.id]);
  }
  constructor(private router: Router) { }

}
