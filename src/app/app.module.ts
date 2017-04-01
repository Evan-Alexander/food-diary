import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { NewFoodComponent } from './new-food/new-food.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodDetailComponent,
    NewFoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
