import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { EditFoodsComponent } from './edit-foods/edit-foods.component';
import { NewFoodComponent } from './new-food/new-food.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'foods/:id',
    component: EditFoodsComponent
  },
  {
    path: 'new-food',
    component: NewFoodComponent
  }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
