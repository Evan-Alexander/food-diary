import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { EditFoodsComponent } from './edit-foods/edit-foods.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '',
    component: EditFoodsComponent
  }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
