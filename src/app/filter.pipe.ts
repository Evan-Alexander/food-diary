import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(foods: any, number: number): any {
    if (number === undefined) return foods;
    return foods.filter(function(food) {
      if (number < food.calorites) 
      return food.calories.includes(number);
    })
  }

}
