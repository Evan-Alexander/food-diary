import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodComponent } from './food/food.component';
import { FoodDetailComponent }   from './food-detail/food-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
   path: 'food/:id',
   component: FoodDetailComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
