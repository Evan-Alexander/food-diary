import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FoodService } from './food.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodDetailComponent,
    NewFoodComponent,
    EditFoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
