import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Food } from '../food.model';

@Component({
  selector: 'app-edit-foods',
  templateUrl: './edit-foods.component.html',
  styleUrls: ['./edit-foods.component.css']
})
export class EditFoodsComponent implements OnInit {
  foodId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlPatameters) => {
      this.foodId = parseInt(urlPatameters['id']);
    });
  }

}
