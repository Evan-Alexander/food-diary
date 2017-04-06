import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { NewFoodComponent } from './new-food/new-food.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { EditFoodComponent } from './edit-food/edit-food.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new-food',
    component: NewFoodComponent
  },
  {
    path: 'foods/:id',
    component: FoodDetailComponent
  },
  {
    path: 'edit-food',
    component: EditFoodComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
