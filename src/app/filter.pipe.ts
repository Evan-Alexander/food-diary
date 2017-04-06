import {Pipe, PipeTransform} from '@angular/core';
import { Food } from './food.model';
import { FoodService } from './food.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Pipe({
  name: 'filter',
  pure: false
})


export class FilterPipe implements PipeTransform {

  transform(input: Food[], calorieFilter) {
    var output: Food[] = [];
    if (calorieFilter === "underThreeHundred") {
      for(var i = 0; i < input.length; i++) {
        if (parseFloat(input[i].calories) < 300) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (calorieFilter === "overThreeHundred") {
      for (var i = 0; i < input.length; i++) {
        if (parseFloat(input[i].calories) > 300) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
